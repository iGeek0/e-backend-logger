const mongoose = require('mongoose');

const LogsSchema = mongoose.Schema({
    logs: {
        application_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Applications'
        },
        ObjectID: {
            type: String("error", "warning", "info", "success")
        },
        priority: {
            type: String("lowest", "low", "normal", "high", "highest")
        },
        path: {
            type: String
        },
        message: {
            type: String
        },
       request: {
            data: {
                type: mongoose.Schema.Types.Mixed
            }
        },
        response: {
            data: {
                type: mongoose.Schema.Types.Mixed
            }
        },

        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }
    },
})

module.exports = mongoose.model('Logs', LogsSchema);
