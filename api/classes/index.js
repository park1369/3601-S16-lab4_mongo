'use strict';

// Defining the "classes" API module
// =======================================


var express = require('express');
var controller = require('./classes.controller.js');

var router = express.Router();

router.get('/', controller.indexClass);
router.post('/', controller.createClass);
router.delete('/:classe_id', controller.destroyClass);

module.exports = router;
