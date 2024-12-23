exports.list = async(req, res) => {
    try {
        res.send('Product list')
    } catch (error) {
        res.status(400).json({
            error: 'Product list error'
        })
    }
}

exports.read = async(req, res) => {
    try {
        res.send('Product read')
    } catch (error) {
        res.status(400).json({
            error: 'Product read error'
        })
        
    }
}

exports.create = async(req, res) => {
    try {
        res.send('Product create')
    } catch (error) {
        res.status(400).json({
            error: 'Product create error'
        })
    }
}

exports.update = async(req, res) => {
    try {
        res.send('Product update')
    } catch (error) {
        res.status(400).json({
            error: 'Product update error'
        })
    }
}

exports.remove = async(req, res) => {
    try {
        res.send('Product remove')
    } catch (error) {
        res.status(400).json({
            error: 'Product remove error'
        })
    }
}




