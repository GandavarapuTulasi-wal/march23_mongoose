const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
router.get('/', productController.getProducts);
router.post('/', productController.createProducts);
router.put('/:id', productController.editProducts);
router.delete('/:id', productController.deleteProduct);
router.get('/:id', productController.getProductById);
router.get('/productsearch/:name', productController.showProductByName);
router.get(
  '/productsearch/availability/:availability',
  productController.findProductByAvailability
);
router.get('/productsearch/price/:price', productController.findProductByPrice);

module.exports = router;
