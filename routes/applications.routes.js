'use strict';

const router = require('express').Router();
const prefix = '/applications';

const controller = require('../controllers/applications.controller');

router.get(`${prefix}/`, controller.all);
router.post(`${prefix}/`, controller.create);
router.get(`${prefix}/:id`, controller.info);
router.put(`${prefix}/:id`, controller.update);
router.delete(`${prefix}/:id`, controller.delete);

module.exports = router;