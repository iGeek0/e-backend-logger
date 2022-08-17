'use strinct'
const Joi = require('joi');
const logs = require('../models/logs.model');
const applications = require('../models/applications.model');

class LogsController {

    all(req, res, next) {
        logs.find({}, (err, logs) => {
            if (err) {
                return next(err)
            }
            res.json(logs)
        })
    }

    create(req, res, next) {
        const schema = Joi.object().keys({
            application_id: Joi.string().required(),
			type: Joi.string().required().valid('info', 'error', 'warning'),
			priority: Joi.string().required().valid('low', 'medium', 'high'),
            path: Joi.string().min(3).max(50).required(),
            message: Joi.string().min(3).max(255),
            request: Joi.object(),
            response: Joi.object(),
        });

		const options = {
			abortEarly: false
		}
        const result = schema.validate(req.body, options);
        if (result.error) {
            return next(result.error);
        }
        logs.create(req.body, (err, log) => {
            if (err) {
                return next(err)
            }
            res.json(log)
        }
        );
    }


	info(req, res, next) {
        logs.findById(req.params.id, (err, log) => {
            if (err) {
                return next(err)
            }
            applications.findById(log.application_id, (err, application) => {
                if (err) {
                    return next(err)
                }
                const { _id, type, priority, message, createdAt } = log;
                res.json({
                    _id,
                    application: {
                        _id: application._id,
                        name: application.name
                    },
                    type,
                    priority,
                    message,
                    createdAt,
                })
            }
            );
        });
	}

	update(req, res, next) {
        logs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, log) => {
            if (err) {
                return next(err)
            }

            res.json(log)
        });
	}

	delete(req, res, next) {
        logs.findByIdAndRemove(req.params.id, (err, log) => {
            if (err) {
                return next(err)
            }
            res.json({ message: 'Log deleted successfully' })
        });
	}
}

module.exports = new LogsController();
