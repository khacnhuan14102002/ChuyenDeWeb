const { default: Password } = require('antd/es/input/Password')
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique : true},
        Password: { type: String, required: true},
        isAdmin: { type: Boolean, default: false, required: true} ,
        phone: { type: Number, required: true},
        acess_token:{ type: String, required: true},
        refresh_token : {type: String, required: true},
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User, userSchema");
module.exports = User;