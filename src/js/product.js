import { getLocalStorage, setLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
import { getParams } from './utils.mjs';
import ProductDetails from './ProductDetails.mjs';

const productId = getParams('product');
const dataSource = new ProductData('tents');

const product = new ProductDetails(productId, dataSource);
product.init();
product.renderProductDetails();


// Create myCart variable to store an array of the elements in the cart
let myCart = [];

function checkCart() {
  // Check if the cart is not empty. If it's not empty, then push every element in the cart into the myCart array.
  // If it is empty, do nothing
  if (localStorage.getItem('so-cart') != null && localStorage.getItem('so-cart') != '') {
    let currentCart = getLocalStorage('so-cart');

    currentCart.forEach(element => {
      myCart.push(element);
    });
  } else {
    myCart = [];
  }
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

