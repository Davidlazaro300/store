// imports
import { singleProductUrl, formatPrice } from '../utils.js';
import getElement from '../getElement.js';
import { addToCart } from '../cart.js';
// selections
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');
let cartProduct;
window.addEventListener('DOMContentLoaded', async function () {
  // console.log(window.location.search);

  const urlID = window.location.search;
  const response = await fetch(`${singleProductUrl}${urlID}`);
  if (response.status >= 200 && response.status <= 299) {
    const product = await response.json();
    // grab values
    const { id, fields } = product;

    const { name, company, price, description } = fields;
    const image = fields.image[0].thumbnails.large.url;

    // set values
    pageTitleDOM.textContent = `Home / ${name}`;
    imgDOM.src = image;
    titleDOM.textContent = name;
    companyDOM.textContent = `by ${company}`;
    priceDOM.textContent = formatPrice(price);
    descDOM.textContent = description;

    // set cart product
    cartProduct = {
      id,
      name,
      price,
      image: fields.image[0].thumbnails.small.url,
    };
  } else {
    console.log(response.status, response.statusText);
    console.log(response);
    centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div>
    `;
  }
});

cartBtn.addEventListener('click', function (e) {
  addToCart(cartProduct);
});
