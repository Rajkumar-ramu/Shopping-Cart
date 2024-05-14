import Payment from '../models/payment.js';

export const getPaymentDetails = async (req,res) =>{
    try{
        const productId = req.params.productId;
        const payment = await Payment.findOne({ productId: productId });
        res.status(200).json({
            status: 'success',
            data: {
                payment
            }
          });
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

export const addPaymentDetails = async (req, res) => {
    console.log('req%j', req);
    // const { productId, amount, currency, status} = req.body;
    try{
        const addPayment = await Payment.create(req.body)
        res.status(200).json(addPayment);
    }catch(error){
        res.status(400).json({error: error.message})
    }
}


export const updatePaymentDetails = async (req, res) => {
    const productId = req.params.productId;
    try {
        // Find the product by ID to update cart 
        const existingCart = await Payment.findOneAndUpdate({productId: productId}, req.body, { new: true });
        res.status(200).json(existingCart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
