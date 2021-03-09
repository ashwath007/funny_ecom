const mongoose = require('mongoose');

const groSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 32
    }
});


module.exports = mongoose.model("Grocery", groSchema);