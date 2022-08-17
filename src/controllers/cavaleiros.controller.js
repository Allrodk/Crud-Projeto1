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
  if (
    !req.body ||
    !req.body.nome ||
    !req.body.constelacao ||
    !req.body.foto ||
    !req.body.idade ||
    !req.body.pais
  ) {
    return res.send('Preencha os campos corretamente!');
  }
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

const deleteCavaleiroController = (req, res) => {
  cavaleirosService.deleteCavaleiroService(req.params.id);
  res.send({ message: 'CAvaleiro Deletado com sucesso!' });
};

module.exports = {
  findCavaleirosController,
  findCavaleiroByIdController,
  createCavaleiroController,
  updateCavaleiroController,
  deleteCavaleiroController,
};
