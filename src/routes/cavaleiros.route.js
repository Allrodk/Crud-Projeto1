const express = require('express');
const router = express.Router();

const cavaleirosController = require('../controllers/cavaleiros.controller');

router.get('/', cavaleirosController.findCavaleirosController);
router.get('/:id', cavaleirosController.findCavaleiroByIdController);

router.post('/create', cavaleirosController.createCavaleiroController);

router.put('/update/:id', cavaleirosController.updateCavaleiroController);

router.delete('/delete/:id', cavaleirosController.deleteCavaleiroController);

module.exports = router;
