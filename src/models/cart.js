import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    productId: String,
    quantity: Number,
    price: Number,
})

const Cart = mongoose.model('cart', cartSchema);

export default Cart;