const Product = require("../models/ProductMode");


const createProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name,image, type, price, countInStock, rating, descriptions } = newProduct;
        try {
            const checkProduct = await Product.findOne({ name: name });
            if (checkProduct != null) {
                return resolve({
                    status: 'OK',
                    message: 'The name of product is already '
                });
            }
          
            const newProduct = await Product.create({
                name,image, type, price, countInStock, rating, descriptions
            });
            if (newProduct ) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newProduct 
                });
            }

        } catch (e) {
            return reject(e);
        }
    });
};

const updateProduct = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({ _id: id });
            if (checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                });
            }
            const updateProduct = await  Product.findByIdAndUpdate(id,data, {new :true})
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updateProduct
            });

        } catch (e) {
            return reject(e);
        }
    });
};
const deleteProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({ _id: id });

            if (checkProduct === null) {
                return resolve({
                    status: 'OK',
                    message: 'The product is not defined'
                });
            }
            await  Product.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'DELETE product SUCCESS',
            });

        } catch (e) {
            reject(e);
        }
    });
};

const getDetailsProduct = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const product = await Product.findOne({ _id: id });

            if (product === null) {
                return resolve({
                    status: 'OK',
                    message: 'The product is not defined'
                });
            }
            resolve({
                status: 'OK',
                message: 'GET PRODUCT SUCCESS',
                data: product
            });

        } catch (e) {
            reject(e);
        }
    });
};

const getAllProduct = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalProduct = await Product.countDocuments()
            console.log('filter', filter)
            if(filter){
                // const objectFilter = {}
                // objectFilter[filter[0]] = filter[1]
                const label = filter[0];
                const  allObjectFilter = await Product.find({
                     [label]: { $regex: filter[1], $options: 'i' }
                }).limit(limit).skip(page*limit)
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allObjectFilter,
                    total: totalProduct,
                    pageCurrent: Number(page+ 1),
                    totalPage: Math.ceil(totalProduct / limit)
                });
            }
            if(sort){
                console.log('okok')
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                // console.log('objectSort', objectSort)
                const  allProductSort = await Product.find().limit(limit).skip(page*limit).sort(objectSort)
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: allProductSort,
                    total: totalProduct,
                    pageCurrent: Number(page+ 1),
                    totalPage: Math.ceil(totalProduct / limit)
                });
            }
            const  allProduct = await Product.find().limit(limit).skip(page*limit)
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allProduct,
                total: totalProduct,
                pageCurrent: Number(page+ 1),
                totalPage: Math.ceil(totalProduct / limit)
            });

        } catch (e) { 
            reject(e);
        }
    });
};
const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const  allType = await Product.distinct('type')
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allType,

            });

        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createProduct,
    updateProduct,
    getDetailsProduct,
    deleteProduct,
    getAllProduct,
    getAllType
};
