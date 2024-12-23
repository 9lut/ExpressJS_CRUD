const Product = require('../Models/product')

exports.list = async (req, res) => {
    try {
        const products = await Product.find({}).exec();
        res.send(products)
    } catch (error) {
        res.status(400).json({
            error: 'Product list error'
        })
    }
}

exports.read = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findOne({ _id: id }).exec();
        res.send(product)
    } catch (error) {
        res.status(400).json({
            error: 'Product read error'
        })

    }
}

exports.create = async (req, res) => {
    try {
        console.log(req.body)
        const product = await Product(req.body).save()
        res.send(product)
    } catch (error) {
        res.status(400).json({
            error: 'Product create error'
        })
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const updated = await Product
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()
        res.send(updated)

    } catch (err) {
        console.log(err)
        res.status(500).send('Update Product Error')
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id;
        const removed = await Product.findOneAndDelete({ _id: id }).exec();
        if (!removed) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.send(`Product with id "${id}" deleted successfully`);
    } catch (error) {
        res.status(400).json({
            error: 'Product remove error'
        })
    }
}




