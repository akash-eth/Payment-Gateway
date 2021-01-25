if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


console.log(stripeSecretKey, stripePublicKey)


const express = require('express');
const fs = require('fs');
const { toASCII } = require('punycode');
const stripe = require('stripe')(stripeSecretKey)

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())


app.get('/store', (req, res) => {
    fs.readFile('items.json', (err, data) => {
        if (err) {
            res.status(500).end();
        }
        else{
            res.render('store.ejs' , {
                stripePublicKey: stripePublicKey,
                items: JSON.parse(data)
            })
        }
    })
})

app.post('/purchase', (req, res) => {
    fs.readFile('items.json', (err, data) => {
        if (err) {
            res.status(500).end()
        }
        else{
            const itemsJson = JSON.parse(data)
            const itemsArray = itemsJson.music.concat(itemsJson.merch)
            let total = 0;
            req.body.items.forEach(function (item) {
                const itemJson = itemsArray.find(function(i) {
                    return i.id == item.id
                })
                total = total + itemJson.price * item.quantity
            })
            

            stripe.charges.create({
                amount: total,
                source: req.body.stripeTokenId,
                currency: 'usd'
            }).then(function() {
                console.log("Charge Successfull")
                res.json({message: "Successfully purchased item"})
            }).catch(function() {
                console.log("Failed Transaction")
                res.status(500).end()
            })
            
        }
    })
})



app.listen(3000)