import { getLocalStorage } from './utils'; 

export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
  
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
    }
  
    calculateItemSummary() {
      // Calculate and display the total amount of the items in the cart and the number of items.
      //this.itemTotal = 0;
      //for (const product of this.list) {
      //  this.itemTotal += product.quantity * parseFloat(product.FinalPrice);
      //}

      this.itemTotal = this.list.reduce((accumulator, element) => {
        return accumulator + element.quantity * element.FinalPrice;
      }, 0);
  
      // Call the method to display the item summary
      this.displayItemSummary();
    }

    calculateTotalItems() {
        this.TotalItems = this.list.reduce((accumulator, element) => {
          return accumulator + element.quantity;
        }, 0);
  
        return this.TotalItems;
      }
  
    calculateOrderTotal() {
      // Calculate the shipping and tax amounts.
      // For simplicity, let's assume fixed values for shipping and tax.
      this.shipping = 10 + (this.list.length) * 2; // $10 for shipping + 2 per item

      this.tax = this.itemTotal * 0.06; // 6% sales tax
  
      // Calculate the order total
      this.orderTotal = this.itemTotal + this.shipping + this.tax;
  
      // Display the totals.
      this.displayOrderTotals();
    }
  
    displayItemSummary() {
      // Display the item summary in the order summary page.
      const itemSummaryHTML = `
        <div>
            <strong>Item Total:</strong> $${this.itemTotal.toFixed(2)}
        </div>
        <div>
            <strong>Number of Items:</strong> ${this.calculateTotalItems()}
        </div>
      `;
  
      document.querySelector(this.outputSelector).innerHTML = itemSummaryHTML;
  
      // Call the method to calculate and display the order total
      this.calculateOrderTotal();
    }
  
    displayOrderTotals() {
      // Display the order totals in the order summary page.
      const orderTotalsHTML = `
        <div>
            <strong>Shipping:</strong> $${this.shipping.toFixed(2)}
        </div>
        <div>
            <strong>Tax:</strong> $${this.tax.toFixed(2)}
        </div>
        <div>
            <strong>Order Total:</strong> $${this.orderTotal.toFixed(2)}
        </div>
      `;
  
      document.querySelector(this.outputSelector).innerHTML += orderTotalsHTML;
    }
  }