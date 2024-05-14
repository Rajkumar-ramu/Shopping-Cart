import express from 'express';

const router = express.Router();

import { getAllProducts, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
//GET Products
router.get('/', getAllProducts);
//POST Products
router.post('/', createProduct);
//UPDATE Products
router.put('/:productId', updateProduct)
// DELETE Products
router.delete('/:productId', deleteProduct);

export default router;