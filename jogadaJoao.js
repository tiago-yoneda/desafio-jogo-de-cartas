const checaCarta = require('./checaCarta');
const incrementRound = require('./incrementaRodada');
const encontraMaxRodadas = require('./encontraMaxRodadas');

const jogadaJoao = (player, drawnCard) => {
  incrementRound(player.cardsOnHand);
  const cardChecked = checaCarta(player.cardsOnHand, drawnCard);

  if(cardChecked !== -1) {
    player.score = player.score + 1;
    player.cardsOnHand[cardChecked].rounds = 0;
    // console.log('João pontuou!!');
    return;
  };

  if(player.cardsOnHand.length === 5) {
    const maxRounds = encontraMaxRodadas(player.cardsOnHand);
    player.cardsOnHand = player.cardsOnHand.filter((card) => card !== maxRounds);
    // console.log(`João descartou ${maxRodadas.valor}`);
  };
  
  player.cardsOnHand.push({value: drawnCard, rounds: 0});
};

module.exports = jogadaJoao;
