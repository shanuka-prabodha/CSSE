const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name : {
        type: String,
        required:true
    },
    quantity : {
        type: Number,
        required:true
    },
    discription : {
        type: String,
        required:true
    },
    unitPrice : {
        type: Number,
        required:true
    },

})

const productModel = mongoose.model('products' , productSchema);
module.exports=productModel;