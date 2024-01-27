import { getLocalStorage, setLocalStorage } from './utils.mjs';
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  // Preventing an error when the cart is empty
  if (cartItems != null) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector('.product-list').innerHTML = htmlItems.join('');

    // add event listeners to each 'remove' button of each item
    cartItems.forEach((item) => {
      document
        .getElementById(`${item.Id}`)
        .addEventListener('click', function () {
          removeItem(item.Id);
        });
    });
  } else {
    document.querySelector('.product-list').innerHTML =
      '<p>Your shopping cart is currently empty. Explore our products and add items to your cart to start shopping!</p>';
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: 1</p>
  <span id='${item.Id}' class='cart-card__remove'>X</span>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
  </li>`;

  return newItem;
}

function removeItem(id) {
  const cartItems = getLocalStorage('so-cart');

  const itemToRemove = cartItems.find((item) => item.Id === id);

  const updatedCartItems = cartItems.filter((item) => item !== itemToRemove);

  if (updatedCartItems.length === 0) {
    localStorage.clear();
    localStorage.removeItem('so-cart');
  } else {
    setLocalStorage('so-cart', updatedCartItems);
  }

  renderCartContents();
}

renderCartContents();
