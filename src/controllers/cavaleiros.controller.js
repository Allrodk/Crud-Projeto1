const cavaleirosService = require('../services/cavaleiros.service');

const findCavaleirosController = (req, res) => {
  const allCavaleiros = cavaleirosService.findCavaleirosService();
  res.send(allCavaleiros);
};

const findCavaleiroByIdController = (req, res) => {
  const chosenCavaleiro = cavaleirosService.findCavaleiroByIdService(
    req.params.id,
  );
  res.send(chosenCavaleiro);
};

const createCavaleiroController = (req, res) => {
  const newCavaleiro = cavaleirosService.createCavaleiroService(req.body);
  res.send(newCavaleiro);
};

module.exports = {
  findCavaleirosController,
  findCavaleiroByIdController,
  createCavaleiroController,
};
