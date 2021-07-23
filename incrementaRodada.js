const incrementaRodada = (cartasNaMao) => {
  const cartasAtualizadas = cartasNaMao.map((carta) => {
    carta.rodadas = carta.rodadas + 1;
    return carta;
  });
  return cartasAtualizadas;
}

module.exports = incrementaRodada;