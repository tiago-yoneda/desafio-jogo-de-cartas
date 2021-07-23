const encontraMaxRodadas = (maoDeCartas) => {
  const max = maoDeCartas.reduce((prev, curr)=> {
    return (prev.rodadas > curr.rodadas ? prev : curr);
  });

  return max;
};

module.exports = encontraMaxRodadas;
