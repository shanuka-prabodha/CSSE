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
    await Reply.find({suppliers: req.params.id}).populate('orders', 'OrderDate DeliveryDate AdminApproval PassedState Assign')
        .then((data) => {
            // res.status(200).send(data)
            // console.log(data)
            data.map((data) => {
                // console.log(data.orders._id)
                order.push({ids: data.orders._id, oDate: data.orders.OrderDate, dDate: data.orders.DeliveryDate, Assign:data.orders.Assign})

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
                            allItems = {data: data.items}
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
            res.status(200).send({data: order})


        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})


router.route('/order').post(async (req, res) => {

    const Alldata = req.body;
    console.log(Alldata);
    const supplierId = req.body.supplierId
    const orderId = req.body.orderId

    // console.log(Alldata.supplierId)
    // console.log(Alldata.orderId)

    const saveData =
        {
            Message: Alldata.message,
            EstimateCost: Alldata.EstimateCost,
        };

    let query = {suppliers: Alldata.supplierId, orders: Alldata.orderId};
    await Reply.find(query)
        .then((data) => {

            const user = data[0];
            // res.status(200).send(user._id);
            // console.log(data._id)

            Reply.findByIdAndUpdate(user._id, saveData)
                .then((response) => {
                    res.status(200).send(response);
                })

        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})


router.route('/read-reply/:id').get(async (req, res) => {
    console.log(req.params.id)
    await Reply.find({orders: req.params.id})
        .then((reply) => {
            res.json(reply)

        })
        .catch(error => {
            res.status(500).send(error.message);
        })
})


router.route('/assign/:id').put(async (req, res) => {
    const id = req.params.id

    console.log(req.body)


    await Reply.findByIdAndUpdate(id, req.body)
        .then((response) => {
            // res.json(response.ChooseSuppliers)
            res.json("Order sent")
        })


        .catch((error) => {
            res.status(500).send({error: error.message})
        })
})


module.exports = router;