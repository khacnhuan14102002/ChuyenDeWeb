const UserService = require('../service/UserService');
const JwtService = require('../service/JwtSevice')
const validateUserInput = (name, email, password, confirmPassword, phone) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password ) {
        return 'All input fields are required';
    }
    if (!reg.test(email)) {
        return 'Invalid email format';
    }
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return null;
};

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const validationError = validateUserInput(name, email, password, confirmPassword, phone);
        if (validationError) {
            return res.status(400).json({
                status: 'ERR',
                message: validationError
            });
        }

        const response = await UserService.createUser(req.body);
        return res.status(201).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;
        const validationError = validateUserInput(name, email, password, confirmPassword, phone);
        if (validationError) {
            return res.status(400).json({
                status: 'ERR',
                message: validationError
            });
        }

        const response = await UserService.loginUser(req.body);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const updateUser = async (req, res) => {
    try {
       const userId = req.params.id
        const  data = req.body
        if(!userId) {
            return res.status(400).json({
                status: 'ERR',
                message: 'User is required'
            });
        }
        const response = await UserService.updateUser(userId, data);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const token = req.headers
        console.log('token',token)
        console.log('userId',userId)
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User is required'
            });
        }
        const response = await UserService.deleteUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};
const getAllUser = async (req, res) => {
    try {

        const response = await UserService.getAllUser();
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};
const getDetailsUser = async (req, res) => {
    try {
        const userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User is required'
            });
        }
        const response = await UserService.getDetailsUser(userId);
        return res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
            error: e.message
        });
    }
};

const refreshToken = async (req, res) => {
    try {
        const token = req.headers.token.split(' ')[1];
        if(!token) {
            return res.status(200).json({
                status: 'ERR',
                message: 'Token  is required'
            });
        }
        const response = await JwtService.refreshTokenJwtService(token);
        return res.status(200).json(response);
    } catch (e) {
       return  res.status(404).json({
           message: e
       })

    }
};
module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    refreshToken

};
