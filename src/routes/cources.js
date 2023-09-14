const express = require('express');
const router = express.Router();
const courcesController = require('../app/controllers/CourcesController');

router.get('/create', courcesController.create);
router.post('/store', courcesController.store);
router.get('/:id/edit', courcesController.edit);
router.put('/:id', courcesController.update);
router.get('/:slug', courcesController.show);

module.exports = router;
