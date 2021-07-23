const checaCarta = (cartasNaMao, cartaSorteada) => {
  const index = cartasNaMao.findIndex((carta) => carta.valor === cartaSorteada);

  return index;
};

module.exports = checaCarta;

