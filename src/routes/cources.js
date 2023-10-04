const express = require('express');
const router = express.Router();
const courcesController = require('../app/controllers/CourcesController');

router.get('/create', courcesController.create);
router.post('/store', courcesController.store);
router.get('/:id/edit', courcesController.edit);
router.put('/:id', courcesController.update);
router.patch('/:id/restore', courcesController.restore);
router.delete('/:id/remove', courcesController.remove);
router.delete('/:id', courcesController.destroy);
router.get('/:slug', courcesController.show);
router.post('/handle-form-action', courcesController.handleFormAction);

module.exports = router;
