const mongoose = require("mongoose");
const AuthorizationsSchema = new mongoose.Schema(
{
    application_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications'
    },
    token: {
        type: String
    },
},
{ timestamps: true }
);

const Authorizations = mongoose.model("Authorizations", AuthorizationsSchema);

module.exports = Authorizations;