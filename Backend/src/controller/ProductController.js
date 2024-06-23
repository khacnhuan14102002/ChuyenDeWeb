
const ProductService = require('../service/ProductService');
const UserService = require("../service/UserService");


const createProduct = async (req, res) => {
    try {
        const { name,image, type, price, countInStock, rating, descriptions } = req.body;
        if (!name || !image|| !type || !price || !countInStock || !rating ) {
            return res.status(200).json({
                status: 'ERR',
                message: 'the input is required'
            })
        }
        console.log('response', req.body)
        const response = await ProductService.createProduct(req.body);
        return res.status(200).json(response);
    } catch (e) {
        res.status(404).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const  data = req.body
        if(!productId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'productId is required'
            });
        }
        const response = await ProductService.updateProduct(productId, data);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const getDetailsProduct = async (req, res) => {
    try {
        const productId = req.params.id
        if(! productId ) {
            return res.status(200).json({
                status: 'ERR',
                message: ' productId  is required'
            });
        }
        const response = await ProductService.getDetailsProduct( productId );
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const token = req.headers
        console.log('token',token)
        console.log('userId',productId)
        if(!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'product is required'
            });
        }
        const response = await ProductService.deleteProduct(productId);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const getAllProduct = async (req, res) => {
    // console.log('req.query', req.query)
    try {
        const{ limit, page , sort, filter} = req.query
        const response = await ProductService.getAllProduct(Number(limit) || 8 , Number(page) || 0 , sort, filter);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

module.exports = {
  createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct

};
