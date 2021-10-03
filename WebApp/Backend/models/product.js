const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    name : {
        type: String,
        required:true
    },
    quantity : {
        type: String,
        required:true
    },
    discription : {
        type: String,
        required:true
    },
    unitPrice : {
        type: String,
        required:true
    },

})

const productModel = mongoose.model('products' , productSchema);
module.exports=productModel;