const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

// Define routes
router.get('/', homeController.home);

module.exports = router;
