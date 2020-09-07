import { formatPrice } from './utils.js';
const display = (products, element) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const {
        id,
        name,
        image: { small, large },
        price,
      } = product;

      return ` <article class="product">
        <div class="product-container">
          <img src="${large}" class="img" />
          <a href="product.html?id=${id}" class="product-link">
            <i class="fas fa-search"></i>
          </a>
        </div>
        <footer>
          <p>${name}</p>
          <h4>${formatPrice(price)}</h4>
        </footer>
      </article>`;
    })
    .join('');
};

export default display;
