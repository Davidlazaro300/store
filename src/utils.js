const allProductsUrl =
  'https://course-api.netlify.app/api/javascript-store-products';
const singleProductUrl =
  'https://course-api.netlify.app/api/javascript-store-single-product';

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export { allProductsUrl, singleProductUrl, formatPrice };
