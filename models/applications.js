const mongoose = require('mongoose');

const ApplicationsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
})

module.exports = mongoose.model('Applications', ApplicationsSchema);