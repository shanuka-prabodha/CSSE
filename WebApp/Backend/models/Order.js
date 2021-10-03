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
        required: false
    },
    AdminApproval: {//
        type: String,
        required: false
    },
    Priority: {
        type: String,
        required: false
    },
    PassedState: { //
        type: String,
        required: false
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
    items: []



})

const OrderModel = mongoose.model('orders', orderSchema);
module.exports = OrderModel;