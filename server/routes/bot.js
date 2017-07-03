const express = require('express');
const router = express.Router();

const bot_controller = require('../controllers/bot');

router.get('/commands', bot_controller.commands);
router.get('/prefix', bot_controller.prefix);
router.get('/avatar', bot_controller.avatar);

module.exports = router;