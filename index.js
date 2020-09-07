import './src/toggleSidebar.js';
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import getElement from './src/getElement.js';

// main data source

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    // display featured
    display(store.featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);
