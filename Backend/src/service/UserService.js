const User = require("../models/UserMode");
const bcrypt = require("bcrypt");
const { genneralAccessToken } = require("../service/JwtSevice");
const {genneralRefreshToken} = require("./JwtSevice");

const createUser = (userData) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userData;
        try {
            const checkUser = await User.findOne({ email: email });
            if (checkUser != null) {
                return resolve({
                    status: 'OK',
                    message: 'The email is already in use'
                });
            }
            const hash = bcrypt.hashSync(password, 10);
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword: hash, // Typically, confirmPassword shouldn't be stored in the database
                phone
            });
            if (createdUser) {
                return resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdUser
                });
            }

        } catch (e) {
            return reject(e);
        }
    });
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { email, password } = userLogin;
        try {
            const checkUser = await User.findOne({ email: email });
            if (checkUser === null) {
                return resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                });
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password);

            if (!comparePassword) {
                return resolve({
                    status: 'OK',
                    message: 'The password or user is incorrect',
                });
            }

            const access_token = await  genneralAccessToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });
            const refesh_token = await genneralRefreshToken({
                id: checkUser.id,
                isAdmin: checkUser.isAdmin
            });
            return resolve({
                status: 'OK',
                message: 'SUCCESS',
               access_token,
                refesh_token
            });

        } catch (e) {
            return reject(e);
        }
    });
};

module.exports = {
    createUser,
    loginUser,

};
