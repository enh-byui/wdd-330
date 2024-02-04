import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import ProductDetails from "./ProductDetails.mjs";

async function main() {
    loadHeaderFooter();
  
    const productId = getParam('product');
    const dataSource = new ExternalServices('tents');
  
    // Use 'await' inside an async function
    const data = await dataSource.findProductById(productId);
    const category = data.Category;
  
    // Set the category link dynamically
    const categoryLink = document.querySelector(".categoryLink");
    //console.log(categoryLink);
  
    if (categoryLink) {
      const anchorElement = document.createElement("a");
      anchorElement.href = `/product-listing/index.html?category=${category.toLowerCase()}`;
      anchorElement.textContent = category;
      categoryLink.appendChild(anchorElement);
    } else {
      console.error("Element with class 'categoryLink' not found.");
    }
  
    const product = new ProductDetails(productId, dataSource);
  
    // Use 'await' inside an async function
    await product.init();

    carousel();
  }
  
  // Call the async function
  main();

  function carousel() {
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let counter = 0;

    function showImage(index) {
        carouselImages.forEach(img => img.style.display = 'none');
        carouselImages[index].style.display = 'block';
    }

    function nextImage() {
        counter = (counter + 1) % carouselImages.length;
        showImage(counter);
    }

    function prevImage() {
        counter = (counter - 1 + carouselImages.length) % carouselImages.length;
        showImage(counter);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Show the first image initially
    showImage(counter);
  }