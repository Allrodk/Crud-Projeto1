const express = require('express');
const router = express.Router();

const cavaleirosController = require('../controllers/cavaleiros.controller');

router.get('/', cavaleirosController.findCavaleirosController);
router.get('/:id', cavaleirosController.findCavaleiroByIdController);

module.exports = router;
