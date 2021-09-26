const mongoose = require('mongoose')

const supplierReplySchema = new mongoose.Schema({

    suppliers : {
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'suppliers'
    },
    EstimateCost : {
        type: String,
        required:true
    },
    Message:{
        type:String,
        required:true
    },
    orders:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'orders'
    }

})

const SupplierReplyModel = mongoose.model('supplierReply' , supplierReplySchema);
module.exports=SupplierReplyModel;