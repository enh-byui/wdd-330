import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// Create myCart variable to store an array of the elements in the cart
let myCart = [];

function checkCart() {
  // Check if the cart is not empty. If it's not empty, then push every element in the cart into the myCart array.
  // If it is empty, do nothing
  if (
    localStorage.getItem("so-cart") != null &&
    localStorage.getItem("so-cart") != ""
  ) {
    let currentCart = getLocalStorage("so-cart");

    currentCart.forEach((element) => {
      myCart.push(element);
    });
  } else {
    myCart = [];
  }
}

function addProductToCart(product) {
  // Call checkCart function to check if the cart is empty
  checkCart();

  // Push the new product to the myCart array
  myCart.push(product);

  // Set the cart with the old products and the new product
  setLocalStorage("so-cart", myCart);

  // Empty the myCart array again for future use
  myCart = [];
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
