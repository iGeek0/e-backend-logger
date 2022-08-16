'use strinct';

class LogsController {

	all(req, res, next) {
		res.json({ message: 'Essssssadsauest.' });
	}

	create(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	info(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	update(req, res, next) {
		res.json({ message: 'Example request.' });
	}

	delete(req, res, next) {
		res.json({ message: 'Example request.' });
	}
}

module.exports = new LogsController();
