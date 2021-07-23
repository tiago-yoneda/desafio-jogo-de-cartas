const jogadaMaria = require('./jogadaMaria');
const jogadaJoao = require('./jogadaJoao');

const sorteiaCarta = () => {
  const carta = Math.floor(Math.random () * 10 + 1);

  return carta;
};

const partida = (rodadas) => {
  const jogadorMaria = {
    pontuacao: 0,
    cartasNaMao: [],
  };

  const jogadorJoao = {
    pontuacao: 0,
    cartasNaMao: [],
  };

  for (let i = 0; i < rodadas; i++) {
    const carta = sorteiaCarta();
    // console.log(`Rodada ${i + 1} - carta sorteada: ${carta}`);
    jogadaMaria(jogadorMaria, carta);
    // console.log('Cartas da Maria    =>', jogadorMaria.cartasNaMao.map((carta) => carta.valor));
    // console.log('Rodadas das cartas =>', jogadorMaria.cartasNaMao.map((carta) => carta.rodadas));

    jogadaJoao(jogadorJoao, carta);
    // console.log('Cartas do João     =>', jogadorJoao.cartasNaMao.map((carta) => carta.valor));
    // console.log('Rodadas das cartas =>', jogadorJoao.cartasNaMao.map((carta) => carta.rodadas));
    // console.log();
  };

  console.log(`Depois de ${rodadas} rodadas`)
  console.log('Pontuação da Maria:', jogadorMaria.pontuacao);
  console.log('Pontuação do João:', jogadorJoao.pontuacao);
  
  console.log(jogadorMaria.pontuacao/jogadorJoao.pontuacao > 1 ? 'Maria ganhou' : 'João ganhou');
};


const rounds = 2000000;

partida(rounds);

