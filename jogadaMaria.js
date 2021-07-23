
const checaCarta = require('./checaCarta');
const incrementaRodada = require('./incrementaRodada');
const encontraMaxRodadas = require('./encontraMaxRodadas');

const jogadaMaria = (jogador, cartaSorteada) => {
  incrementaRodada(jogador.cartasNaMao);

  if(checaCarta(jogador.cartasNaMao, cartaSorteada) !== -1) {
    jogador.pontuacao = jogador.pontuacao + 1;
    // console.log('Maria pontuou!!');
    return;
  };

  if(jogador.cartasNaMao.length === 5) {
    const maxRodadas = encontraMaxRodadas(jogador.cartasNaMao);
    jogador.cartasNaMao = jogador.cartasNaMao.filter((carta) => carta !== maxRodadas);
    // console.log(`Maria descartou ${maxRodadas.valor}`);
  };

  jogador.cartasNaMao.push({valor: cartaSorteada, rodadas: 0});
};

module.exports = jogadaMaria;
