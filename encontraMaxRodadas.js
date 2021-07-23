const findMaxRounds = (cardsOnHand) => {
  const findMax = cardsOnHand.reduce((prev, curr)=> {
    return (prev.rounds > curr.rounds ? prev : curr);
  });

  return findMax;
};

module.exports = findMaxRounds;
