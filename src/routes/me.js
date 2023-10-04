const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

router.get('/stored/cources', meController.storedCources);
router.get('/trash/cources', meController.trashCources);

module.exports = router;
