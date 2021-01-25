if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


console.log(stripeSecretKey, stripePublicKey)


const express = require('express');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

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
            console.log("purchase");
        }
    })
})


app.listen(3000)