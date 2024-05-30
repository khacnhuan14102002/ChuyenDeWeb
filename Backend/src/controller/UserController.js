const UserService = require('../service/UserService');

const createUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, phone}   = req.body
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isCheckMail = reg.test(email)
        if(!name || !email || !password || !confirmPassword || !phone){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }else if(password !== confirmPassword){
            return res.status(200).json({
                status: 'ERR',
                message: 'The password is equals confirmPassword'
            })
    }
        console.log('isCheckMail',isCheckMail);
         const respon = await UserService.createUser(req.body);
         return res.status(200).json(respon);
    } catch (e) {
        res.status(404).json({
            message: e
        });
    }
};

module.exports = {
    createUser
};
