const mongoose = require('mongoose')

const supplierReplySchema = new mongoose.Schema({

    suppliers : {
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'suppliers'
    },
    EstimateCost : {
        type: String,
        required:false
    },
    Message:{
        type:String,
        required:false
    },
    orders:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'orders'
    },
    Assign:{
        type:String,
        default:'false'
    }

})


//new assign attribute
const SupplierReplyModel = mongoose.model('supplierReply' , supplierReplySchema);
module.exports=SupplierReplyModel;