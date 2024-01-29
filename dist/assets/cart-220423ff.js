import{g as c,l as s}from"./utils-ac5e6cb2.js";/* empty css              */function o(r){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${r.Image}"
      alt="${r.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${r.Name}</h2>
  </a>
  <p class="cart-card__color">${r.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${r.FinalPrice}</p>
</li>`}class n{constructor(t,a){this.key=t,this.parentSelector=a}renderCartContents(){const a=c(this.key).map(e=>o(e));document.querySelector(this.parentSelector).innerHTML=a.join("")}}s();const l=new n("so-cart",".product-list");l.renderCartContents();
