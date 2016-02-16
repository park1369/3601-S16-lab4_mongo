'use strict';

// Defining the "gpacalc" API module
// =======================================


var express = require('express');
var controller = require('./gpacalc.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:gpacalc_id', controller.destroy);

module.exports = router;
