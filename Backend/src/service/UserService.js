const createUser = (userData) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(userData);
        } catch (e) {
            console.log(e)
            reject(e);
        }
    });
};

module.exports = {
    createUser
};
