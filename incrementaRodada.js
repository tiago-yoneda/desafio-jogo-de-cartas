const incrementRound = (cardsOnHand) => {
  const cartasAtualizadas = cardsOnHand.map((card) => {
    card.rounds = card.rounds + 1;
    return card;
  });

  return cartasAtualizadas;
}

module.exports = incrementRound;