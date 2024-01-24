import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatar: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
    },
    pincode:{
        type: Number,
        length: 10,
    },
    phone: {
        type: Number,
        length: 10,
    }
}, {timestamps: true})


export default ( mongoose.models.User || mongoose.model('User', userSchema) )