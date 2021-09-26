const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({

    Name : {
        type: String,
        required:true
    },
    Location : {
        type: String,
        required:true
    },
    Type:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    }

})

const SupplierModel = mongoose.model('suppliers' , supplierSchema);
module.exports=SupplierModel;