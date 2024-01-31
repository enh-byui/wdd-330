import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the search form and input field
    var searchForm = document.getElementById('search');
    var searchInput = document.getElementById('product');
    var categoryElement = document.getElementById('mycategory');
    var button = document.getElementById('search-button');
    var category = categoryElement;
    console.log(categoryElement);

    // Attach event listener to the search form
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get the search query from the input field
        var query = searchInput.value.trim();
        
        window.location.href = `product-listing/index.html?category=${category}`;

    });
});