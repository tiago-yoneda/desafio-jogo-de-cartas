const checkCard = (cardsOnHand, drawnCard) => {
  const index = cardsOnHand.findIndex((card) => card.value === drawnCard);

  return index;
};

module.exports = checkCard;

