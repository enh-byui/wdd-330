import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryLarge}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <span id='${item.Id}' class='cart-card__remove'>X</span>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

export default class ShoppingCart {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }
  renderCartContents() {
    const cartItems = getLocalStorage(this.key);

    if (cartItems != null) {
      const htmlItems = cartItems.map((item) => cartItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");

      // add event listeners to each 'remove' button of each item
      cartItems.forEach((item) => {
        document
          .getElementById(`${item.Id}`)
          .addEventListener('click', () => {
            this.removeProduct(item.Id);
          })
        });
    } else {
      document.querySelector(this.parentSelector).innerHTML = '<p>No items added</p>';
    }
  }
  removeProduct(id) { 
    const cartItems = getLocalStorage(this.key);
  
    const itemToRemove = cartItems.find(item => item.Id === id);
  
    const updatedCartItems = cartItems.filter( (item) => item !== itemToRemove);
  
    if (updatedCartItems.length === 0) {
      localStorage.clear();
      localStorage.removeItem(this.key);
    } else {
      setLocalStorage(this.key, updatedCartItems);
    }
  
    this.renderCartContents();
  }
}