const serviceProducts = require('../services/products');

const getAllProducts = async (_req, res) => {
  const products = await serviceProducts.getAllProducts();
  
  return res.status(200).json(products);
};

module.exports = {
  getAllProducts,
};
