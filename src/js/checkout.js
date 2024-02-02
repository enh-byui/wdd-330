import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

// Instantiate the CheckoutProcess class with the localStorage key and output selector
const checkout = new CheckoutProcess('so-cart', '#orderSummaryContainer');

// Initialize the checkout process
checkout.init();
