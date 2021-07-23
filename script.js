const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '/rounds.json');

const findMaxRounds = (cardsOnHand) => {
  const findMax = cardsOnHand.reduce((prev, curr)=> {
    return (prev.rounds > curr.rounds ? prev : curr);
  });

  return findMax;
};

const checkCard = (cardsOnHand, drawnCard) => {
  const index = cardsOnHand.findIndex((card) => card.value === drawnCard);

  return index;
};

const incrementRound = (cardsOnHand) => {
  const updatedCards = cardsOnHand.map((card) => {
    card.rounds = card.rounds + 1;
    return card;
  });

  return updatedCards;
}

const turnMaria = (player, drawnCard) => {
  incrementRound(player.cardsOnHand);

  const cardChecked = checkCard(player.cardsOnHand, drawnCard);

  if (cardChecked !== -1) {
    player.score = player.score + 1;
    return;
  };

  if (player.cardsOnHand.length === 5) {
    const maxRounds = findMaxRounds(player.cardsOnHand);
    player.cardsOnHand = player.cardsOnHand.filter((card) => card !== maxRounds);
  };

  player.cardsOnHand.push({ value: drawnCard, rounds: 0 });
};

const turnJoao = (player, drawnCard) => {
  incrementRound(player.cardsOnHand);

  const cardChecked = checkCard(player.cardsOnHand, drawnCard);

  if (cardChecked !== -1) {
    player.score = player.score + 1;
    player.cardsOnHand[cardChecked].rounds = 0;
    return;
  };

  if (player.cardsOnHand.length === 5) {
    const maxRounds = findMaxRounds(player.cardsOnHand);
    player.cardsOnHand = player.cardsOnHand.filter((card) => card !== maxRounds);
  };

  player.cardsOnHand.push({ value: drawnCard, rounds: 0 });
};

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

    turnMaria(playerMaria, card);

    turnJoao(playerJoao, card);

  };

  console.log(`Depois de ${rounds} rodadas`);
  console.log('Pontuação da Maria:', playerMaria.score);
  console.log('Pontuação do João :', playerJoao.score);

  console.log(playerMaria.score / playerJoao.score > 1 ? 'Maria ganhou' : 'João ganhou');
};

match();
