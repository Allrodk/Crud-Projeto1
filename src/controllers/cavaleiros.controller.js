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

const updateCavaleiroController = (req, res) => {
  const updatedCavaleiro = cavaleirosService.updateCavaleiroService(
    req.params.id,
    req.body,
  );
  res.send(updatedCavaleiro);
};

module.exports = {
  findCavaleirosController,
  findCavaleiroByIdController,
  createCavaleiroController,
  updateCavaleiroController,
};
