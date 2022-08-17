const mongoose = require("mongoose");
const ApplicationsSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
},
{ timestamps: true }
);

const Applications = mongoose.model("Applications", ApplicationsSchema);

module.exports = Applications;
