import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required:  true,
    },
    images: {
        type: Array<string>,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    material:{
        type: String,
        required: true
    },
    minQty:{
        type: Number,
        default: 1
    },  
    keywords: {
        type: Array,
    },
    length:{
        type: Number
    },
    width:{
        type: Number
    },
    height:{
        type: Number
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        default: 3
    }
}, {timestamps: true})

export default ( mongoose.models.Product || mongoose.model('Product', productSchema) )