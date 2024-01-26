import{g as r,s as d,l as o,a as s}from"./utils-ac5e6cb2.js";/* empty css              */import{P as i}from"./ProductData-310b43e2.js";function c(t){return`<section class="product-detail"> <h3>${t.Brand.Name}</h3>
    <h2 class="divider">${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Images.PrimaryLarge}"
      alt="${t.NameWithoutBrand}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">
    ${t.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div></section>`}class n{constructor(a,e){this.productId=a,this.product={},this.dataSource=e}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails("main"),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=r("so-cart");a||(a=[]),a.push(this.product),d("so-cart",a)}renderProductDetails(a){document.querySelector(a).insertAdjacentHTML("afterBegin",c(this.product))}}o();const l=s("product"),u=new i("tents"),p=new n(l,u);p.init();
