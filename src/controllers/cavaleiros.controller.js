const cavaleirosService = require('../services/cavaleiros.service');

const findCavaleirosController = (req, res) => {
  const allCavaleiros = cavaleirosService.findCavaleirosService();
  res.send(allCavaleiros);
};

const findCavaleiroByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenCavaleiro = cavaleirosService.findCavaleiroByIdService(idParam);
  res.send(chosenCavaleiro);
};

module.exports = {
  findCavaleirosController,
  findCavaleiroByIdController,
};
