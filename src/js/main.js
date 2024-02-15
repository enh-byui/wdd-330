import { loadHeaderFooter } from './utils.mjs';
import OrderSearch from './Order.mjs';

loadHeaderFooter();

window.searchOrder = () => {
  const orderId = document.getElementById('orderIdInput').value;

  const orderDetailsContainer = document.getElementById('orderDetails');
  orderDetailsContainer.innerHTML = window.orderSearch.getOrderDetailsHTML(parseInt(orderId));
};
