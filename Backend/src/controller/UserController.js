const UserService = require('../service/UserService');

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await UserService.createUser(req.body);
        return res.status(200).json(user);
    } catch (e) {
        res.status(400).json({
            message: e.message
        });
    }
};

module.exports = {
    createUser
};
