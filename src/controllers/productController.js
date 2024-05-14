import Product from '../models/product.js';


export const getAllProducts = async (req,res) =>{
    try{
        const products = await Product.find();
        console.log('***products', products);
        res.status(200).json({
            status: 'success',
            data: {
                products
            }
          });
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

export const createProduct = async (req, res) => {
    console.log(req.body);
    const { name, description, category, company } = req.body;
    try{
        const createProduct = await Product.create({name, description, category, company})
        res.status(200).json(createProduct);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


export const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    try {
        const existingProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.status(200).json(existingProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};