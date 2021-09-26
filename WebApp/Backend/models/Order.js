const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({

    OrderDate: {
        type: String,
        required: true
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
    }],

})

const OrderModel = mongoose.model('orders', orderSchema);
module.exports = OrderModel;