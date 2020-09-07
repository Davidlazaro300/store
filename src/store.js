let store = { allProducts: [], filtered: [], featured: [] };

const setupStore = (products) => {
  const allProducts = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, image },
    } = product;
    const small = image[0].thumbnails.small.url;
    const large = image[0].thumbnails.large.url;
    return { id, featured, name, price, image: { small, large } };
  });
  const filtered = [...allProducts];
  const featured = allProducts.filter((product) => product.featured === true);
  store = { ...store, allProducts, filtered, featured };
};

export { store, setupStore };
