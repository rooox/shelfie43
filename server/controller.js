module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory().then((products) => res.status(200).send(products))
        .catch(err => {
            console.log(err);
            res.staus(500).send(err);
        })
    },
    addInventory: (req, res) => {
        const dbInstance = req.app.get('db');
        let {image_url, product, price} = req.body;
        dbInstance.create_product([image_url, product, price]).then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
        console.log(err);
        res.staus(500).send(err);
    })
},
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const{id} = req.params;
        dbInstance.delete_product([id]).then(()=> {
            res.sendStatus(200);
        })
    }
}