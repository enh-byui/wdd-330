export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.product = { };
      this.dataSource = dataSource;
    }
    init() {

    }
    addToCart(product) {
        // Call checkCart function to check if the cart is empty
        checkCart();

        // Push the new product to the myCart array
        myCart.push(product);

        // Set the cart with the old products and the new product
        setLocalStorage('so-cart', myCart);

        // Empty the myCart array again for future use
        myCart = [];
    }
    renderProductDetails() {
        let temp = document.getElementsByTagName('template')[0];
        let clon = temp.content.importNode(true);

        const brandName = clon.querySelector('h3');
        brandName.textContent = this.product.Brand.Name;

        document.body.appendChild(clon);
    }
}