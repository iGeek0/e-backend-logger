'use strinct';
applications = require('../models/applications.model');
const Joi = require('joi');

class ApplicationsController {

	all(req, res, next) {
		applications.find({}, (err, applications) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json(applications);
		});
	}

	create(req, res, next) {
        const schema = Joi.object().keys({
            name: Joi.string().min(3).max(255),
        });

		const options = {
			abortEarly: false
		}
        const result = schema.validate(req.body, options);
        if (result.error) {
            return next(result.error);
        }
        applications.create(req.body, (err, application) => {
            if (err) {
                return next(err)
            }
            res.json(application)
        }
        );
    }

	info(req, res, next) {
		applications.findById(req.params.
			id, (err, application) => {
				if (err) {
					res.status(500).send(err);
				}
				res.json(application);
			});
	}

	update(req, res, next) {
		applications.findByIdAndUpdate(req.params.id, req.body, (err, application) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json(application);
		});

	}

	delete(req, res, next) {
		applications.findByIdAndRemove(req.params.id, (err, application) => {
			if (err) {
				res.status(500).send(err);
			}
			res.json({ message: 'Application deleted successfully' });
		});
	}
}

module.exports = new ApplicationsController();
