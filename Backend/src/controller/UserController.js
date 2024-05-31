const UserService = require('../service/UserService');

const validateUserInput = (name, email, password, confirmPassword, phone) => {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !password || !confirmPassword || !phone) {
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



module.exports = {
    createUser,
    loginUser

};
