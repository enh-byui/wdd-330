import { loadHeaderFooter } from './utils.mjs';
import OrderSearch from './Order.mjs';

loadHeaderFooter();

window.searchClientOrders = () => {
  const clientId = document.getElementById('clientIdInput').value;

  const clientOrdersContainer = document.getElementById('clientOrders');
  clientOrdersContainer.innerHTML = window.orderSearch.getOrdersByClientIdHTML(parseInt(clientId));
};
