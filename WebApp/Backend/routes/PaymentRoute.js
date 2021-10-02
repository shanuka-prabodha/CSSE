const router = require("express").Router();

const {v4: uuidv4} = require('uuid');
const stripe = require("stripe")("sk_test_51JaknZDzPOTabH3bzEwiG4P0x3dgBHAvZIfbF8uN40LBW0GQw19IVDO3XsLBAuCDBidNxEW52crJ005ED6H6BwVC004EB8n7EB")


router.route("/make").post(async (req,res)=>{



    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const {product, token} = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotencyKey = uuidv4();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the ${product.name}`,
                // shipping: {
                //     name: token.card.name,
                //     address: {
                //         line1: token.card.address_line1,
                //         line2: token.card.address_line2,
                //         city: token.card.address_city,
                //         country: token.card.address_country,
                //         postal_code: token.card.address_zip
                //     }
                // }
            },
            {
                idempotencyKey
            }
        );
        console.log("Charge:", {charge});
        status = "success";
        res.send(charge.receipt_url)
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    //res.json({error, status});
})





module.exports=router;
