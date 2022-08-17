const mongoose = require("mongoose");
const logsSchema = new mongoose.Schema(
{
    application_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applications',
    },
    type: {
        type: String,
    },
    priority: {
        type: String,
    },
    path: {
        type: String
    },
    message: {
        type: String
    },
   request: {
        type: mongoose.Schema.Types.Mixed
    },
    response: {
        type: mongoose.Schema.Types.Mixed
    },
},
{ timestamps: true }
);

const Logs = mongoose.model("logs", logsSchema);

module.exports = Logs;