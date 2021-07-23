const turnMaria = require('./jogadaMaria');
const turnJoao = require('./jogadaJoao');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '/rounds.json');

const match = () => {
  const cardArray = JSON.parse(fs.readFileSync(filePath));

  const rounds = cardArray.length;

  const playerMaria = {
    score: 0,
    cardsOnHand: [],
  };

  const playerJoao = {
    score: 0,
    cardsOnHand: [],
  };

  for (let i = 0; i < rounds; i++) {
    const card = cardArray[i];
    // console.log(`Rodada ${i + 1} - carta sorteada: ${carta}`);
    turnMaria(playerMaria, card);
    // console.log('Cartas da Maria    =>', jogadorMaria.cartasNaMao.map((carta) => carta.valor));
    // console.log('Rodadas das cartas =>', jogadorMaria.cartasNaMao.map((carta) => carta.rodadas));

    turnJoao(playerJoao, card);
    // console.log('Cartas do João     =>', jogadorJoao.cartasNaMao.map((carta) => carta.valor));
    // console.log('Rodadas das cartas =>', jogadorJoao.cartasNaMao.map((carta) => carta.rodadas));
    // console.log();
  };

  console.log(`Depois de ${rounds} rodadas`)
  console.log('Pontuação da Maria:', playerMaria.score);
  console.log('Pontuação do João :', playerJoao.score);
  
  console.log(playerMaria.score/playerJoao.score > 1 ? 'Maria ganhou' : 'João ganhou');
};



match();

