const  jwt = require('jsonwebtoken')
const dotenv = require ('dotenv')
dotenv.config()
const authMiddleware = (req, res, next) => {
    const token = req.headers.token?.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'No token provided',
            status: 'ERROR'
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(403).json({
                message: 'Failed to authenticate token',
                status: 'ERROR'
            });
        }

        // Directly check for isAdmin on the user object
        if (user?.isAdmin) {
            next();
        } else {
            return res.status(403).json({
                message: 'Access denied',
                status: 'ERROR'
            });
        }
    });
};

const authUserMiddleware = (req, res, next) => {
    const token = req.headers.token?.split(' ')[1];
    const userId = req.params.id
    if (!token) {
        return res.status(401).json({
            message: 'No token provided',
            status: 'ERROR'
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(403).json({
                message: 'Failed to authenticate token',
                status: 'ERROR'
            });
        }

        // Directly check for isAdmin on the user object
        if (user?.isAdmin || user.id === userId) {
            next();
        } else {
            return res.status(403).json({
                message: 'Access denied',
                status: 'ERROR'
            });
        }
    });
};
module.exports={
    authMiddleware,
    authUserMiddleware
}