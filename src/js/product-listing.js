import { loadHeaderFooter, getParam } from "./utils.mjs";
import ExternalServices from './ExternalServices.mjs';
import ProductList from './ProductList.mjs';
//import Alert from './Alert.mjs';

loadHeaderFooter();

const category = getParam('category');
const dataSource = new ExternalServices();
const element = document.querySelector('.product-list');
//const product = getParam('product')
const listing = new ProductList(category, dataSource, element);



/*
if (product === '' || product === null) {
    const listing = new ProductList(category, dataSource, element);
    listing.init();

} else {
    const listing = new ProductList(category, dataSource, element);
    listing.productsByName(product);
}
*/

listing.init();

//const alert = new Alert();
//alert.init();