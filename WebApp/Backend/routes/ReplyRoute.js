const router = require("express").Router();
const Reply = require("../models/SupplierReplies")
const Order = require("../models/Order");
const _ = require('underscore-contrib');
const {response} = require("express");

router.route("/add").post((req, res) => {

    const reply = new Reply(req.body);

    reply.save().then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err)
    })
})


router.route('/get-orders/:id').get(async (req, res) => {
    let order = [];
    let set = {};
    let allItems = {};
    await Reply.find({suppliers: req.params.id}).populate('orders', 'OrderDate DeliveryDate AdminApproval PassedState')
        .then((data) => {
            // res.status(200).send(data)
            data.map((data) => {
                // console.log(data.orders._id)
                order.push(data.orders._id)
            })


            let items = '';
            order.map((order) => {
                // console.log(order)
                Order.find({_id: order})
                    .then((data) => {
                        // res.status(200).send(data);
                        data.map((data) => {
                            // console.log(data.items)
                            items = data.items
                            // console.log(data.items)
                             allItems={data:data.items}
                        })
                        // console.log(allItems)
                        // console.log(allItems)
                        // res.status(200).send(items)
                    })

            })

            console.log(allItems)
            // res.status(200).send({data:allItems})
            // res.json({data:allItems})


            // res.status(200).send(allItems)
            res.status(200).send({data:order})


        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})


module.exports = router;