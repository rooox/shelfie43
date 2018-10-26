require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const port = 8050
const app = express();
const ctrl = require('./controller');

app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.addInventory)
// app.update('/api/product/:id', ctrl.updateProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)


app.listen (port, () => {
    console.log(`Server running on port ${port}`)
});

