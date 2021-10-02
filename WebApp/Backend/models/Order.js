const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    OrderDate: {
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: false
    },

    DeliveryDate: {
        type: String,
        required: true
    },
    AdminApproval: {
        type: String,
        required: true
    },
    Priority: {
        type: String,
        required: true
    },
    PassedState: {
        type: String,
        required: true
    },
    ReferenceNo: {
        type: String,
        required: false
    },
    Assign:{
        type:String,
        default:'false'
    }
    ,
    State:{
        type:String,
        default:'Idle'
    },
    ChooseSuppliers: [{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'suppliers'

    }],
    AssignSupplier: {
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'suppliers'
    },
    items: [{
        itemName: {type: mongoose.Schema.Types.ObjectId , required:false},
        quantity: {type: Number, required: false},
        name: {type: String, required: false},
        unitPrice: {type: String, required: false},
        discription: {type: String, required: false},
    }],



},

{
    timestamps: true
})

const OrderModel = mongoose.model('orders', orderSchema);
module.exports = OrderModel;