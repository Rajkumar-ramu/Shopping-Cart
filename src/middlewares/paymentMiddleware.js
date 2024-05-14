const updatePaymentDateMiddleware = (req, res, next) => {
    if (req.path === '/payments/addPaymentDetails' && req.method === 'POST') {
        req.body.date = new Date();
    }
    next();
};

export default updatePaymentDateMiddleware;