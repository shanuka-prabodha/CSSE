const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({

    ItemName : {
        type: String,
        required:true
    },
    Description : {
        type: String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Unit:{
        type:String,
        required:true
    }

})

const ItemModel = mongoose.model('items' , itemSchema);
module.exports=ItemModel;