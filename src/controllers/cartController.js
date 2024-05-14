import Cart from '../models/cart.js';

export const getAllCarts = async (req,res) =>{
    try{
        const carts = await Cart.find();
        res.status(200).json({
            status: 'success',
            data: {
                carts
            }
          });
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

export const addCart = async (req, res) => {
    const { productId, quantity, price } = req.body;
    try{
        const addCart = await Cart.create({productId, quantity, price})
        res.status(200).json(addCart);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


export const updateCart = async (req, res) => {
    const productId = req.params.productId;
    try {
        // Find the product by ID to update cart 
        const existingCart = await Cart.findOneAndUpdate({productId: productId}, req.body, { new: true });
        res.status(200).json(existingCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteCart = async (req, res) => {
    const { productId } = req.params;

    try {
        // Find the product by ID and delete it
        const deleteCart = await Cart.findOneAndDelete({productId: productId},  { new: true });
        
        if (!deleteCart) {
            return res.status(404).json({ error: 'Item not found' });
        }
        
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};