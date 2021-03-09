const Grocery = require('../models/grocery');
exports.saveGrocery = async(req, rep) => {
    try {
        const g = Grocery(req.body);
        return g.save()
    } catch (e) {
        console.log(e)
    }
}

exports.getAll = async(req, reply) => {
    try {
        const courses = await Grocery.find()
    } catch (err) {
        console.log(err)
    }
}