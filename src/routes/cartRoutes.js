import express from 'express';

const router = express.Router();


import { getAllCarts, addCart, updateCart, deleteCart} from '../controllers/cartController.js';
//GET Carts
router.get('/getAllCarts', getAllCarts);
//POST Carts
router.post('/addCart', addCart);
//UPDATE Carts
router.put('/updateCart/:productId', updateCart)
// DELETE Carts
router.delete('/deleteCart/:productId', deleteCart);

export default router;