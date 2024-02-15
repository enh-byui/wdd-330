export default class OrderSearch {
  constructor(orders) {
    this.orders = orders;
  }

  searchOrderById(orderId) {
    const foundOrder = this.orders.find(order => order.order_id === orderId);
    return foundOrder || null;
  }

  generateOrderCardHTML(order) {
    return `
      <h2>Order Details</h2>
      <p><strong>Order ID:</strong> ${order.order_id}</p>
      <p><strong>Customer Name:</strong> ${order.customer.name}</p>
      <p><strong>Address:</strong> ${order.customer.address}</p>
      <p><strong>Phone:</strong> ${order.customer.phone}</p>
      <p><strong>Status:</strong> ${order.order_status}</p>
      <p><strong>Total Amount:</strong> $${order.total_amount.toFixed(2)}</p>
    `;
  }

  getOrdersByClientIdHTML(clientId) {
    const clientOrders = this.orders.filter(order => order.customer_id === clientId);

    if (clientOrders.length > 0) {
      const tableHeader = `
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
      `;

      const tableRows = clientOrders.map(order => `
        <tr>
          <td>${order.order_id}</td>
          <td>${order.customer.name}</td>
          <td>${order.customer.address}</td>
          <td>${order.customer.phone}</td>
          <td>${order.order_status}</td>
          <td>$${order.total_amount.toFixed(2)}</td>
        </tr>
      `).join('');

      const tableFooter = `
          </tbody>
        </table>
      `;

      return tableHeader + tableRows + tableFooter;
    } else {
      return '<p>No orders found for the given client ID.</p>';
    }
  }

  getOrderDetailsHTML(orderId) {
    const foundOrder = this.searchOrderById(orderId);

    if (foundOrder) {
      return this.generateOrderCardHTML(foundOrder);
    } else {
      return '<p>No order found with the given ID.</p>';
    }
  }
}

// Function to load orders data from the JSON file
export const loadOrdersData = async () => {
  try {
    const response = await fetch('../json/orders.json');
    const data = await response.json();

    // Create an instance of OrderSearch with the loaded data
    const orderSearch = new OrderSearch(data.orders);

    // Expose orderSearch to the global scope for easier testing in the browser console
    window.orderSearch = orderSearch;
  } catch (error) {
    console.error('Error loading orders data:', error);
  }
};

// Call the function to load orders data
loadOrdersData();
