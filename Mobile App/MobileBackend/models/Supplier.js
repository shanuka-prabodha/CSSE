const mongoose = require('mongoose')

const supplierSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: false
    },
    Location: {
        type: String,
        required: false
    },
    Type: {
        type: String,
        required: false
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: false
    }

})

const SupplierModel = mongoose.model('suppliers', supplierSchema);
module.exports = SupplierModel;