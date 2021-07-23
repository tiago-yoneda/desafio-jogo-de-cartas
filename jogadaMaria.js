
const checaCarta = require('./checaCarta');
const incrementaRodada = require('./incrementaRodada');
const encontraMaxRodadas = require('./encontraMaxRodadas');

const turnMaria = (player, drawnCard) => {

  incrementaRodada(player.cardsOnHand);

  if(checaCarta(player.cardsOnHand, drawnCard) !== -1) {
    player.score = player.score + 1;
    // console.log('Maria pontuou!!');
    return;
  };

  if(player.cardsOnHand.length === 5) {
    const maxRounds = encontraMaxRodadas(player.cardsOnHand);
    player.cardsOnHand = player.cardsOnHand.filter((card) => card !== maxRounds);
    // console.log(`Maria descartou ${maxRodadas.valor}`);
  };

  player.cardsOnHand.push({value: drawnCard, rounds: 0});
};

module.exports = turnMaria;
