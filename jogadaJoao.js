
const checaCarta = require('./checaCarta');
const incrementaRodada = require('./incrementaRodada');
const encontraMaxRodadas = require('./encontraMaxRodadas');

const jogadaJoao = (jogador, cartaSorteada) => {
  incrementaRodada(jogador.cartasNaMao);
  const checagem = checaCarta(jogador.cartasNaMao, cartaSorteada);

  if(checagem !== -1) {
    jogador.pontuacao = jogador.pontuacao + 1;
    jogador.cartasNaMao[checagem].rodadas = 0;
    // console.log('João pontuou!!');
    return;
  };

  if(jogador.cartasNaMao.length === 5) {
    const maxRodadas = encontraMaxRodadas(jogador.cartasNaMao);
    jogador.cartasNaMao = jogador.cartasNaMao.filter((carta) => carta !== maxRodadas);
    // console.log(`João descartou ${maxRodadas.valor}`);
  };
  
  jogador.cartasNaMao.push({valor: cartaSorteada, rodadas: 0});
};

module.exports = jogadaJoao;
