const express = require('express');
const router = express.Router();
const searchController = require('../app/controllers/SearchController');

router.get('/', searchController.index);
router.post('/', searchController.submit);

module.exports = router;
