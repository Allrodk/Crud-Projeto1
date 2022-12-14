const cavaleiros = [
    {
      id: 1,
      nome: 'Seya',
      constelacao: 'Pegasus',
      foto: './assets/images/seya',
      idade: 14,
      pais: 'Japão',
    },
    {
      id: 2,
      nome: 'Saga',
      constelacao: 'Gêmeos',
      foto: './assets/images/saga',
      idade: 28,
      pais: 'Gécia',
    },
    {
      id: 3,
      nome: 'Ikki',
      constelacao: 'Fênix',
      foto: './assets/images/ikki',
      idade: 16,
      pais: 'Japão',
    },
  ];
  
  const findCavaleirosService = () => {
    return cavaleiros;
  };
  
  const findCavaleiroByIdService = (id) => {
    return cavaleiros.find((cavaleiro) => cavaleiro.id == id);
  };
  
  const createCavaleiroService = (newCavaleiro) => {
    const newId = cavaleiros.length + 1;
    newCavaleiro.id = newId;
    cavaleiros.push(newCavaleiro);
    return newCavaleiro;
  };
  
  const updateCavaleiroService = (id, cavaleiroEdited) => {
    cavaleiroEdited['id'] = id;
    const cavaleiroIndex = cavaleiros.findIndex(
      (cavaleiro) => cavaleiro.id == id,
    );
    cavaleiros[cavaleiroIndex] = cavaleiroEdited;
    return cavaleiroEdited;
  };
  
  const deleteCavaleiroService = (id) => {
    const cavaleiroIndex = cavaleiros.findIndex(
      (cavaleiro) => cavaleiro.id == id,
    );
    delete cavaleiros[cavaleiroIndex];
    return 'Deletado';
  };
  
  module.exports = {
    findCavaleirosService,
    findCavaleiroByIdService,
    createCavaleiroService,
    updateCavaleiroService,
    deleteCavaleiroService,
  };
  