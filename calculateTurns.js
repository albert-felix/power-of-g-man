// Function to calculate the turns required
const calculateTurns = (sourceDirection, xMoves, yMoves) => {
  const updateTurns = (moves) => {
    if (moves === 0) {
      return 0;
    } else {
      return 1;
    }
  };

  let turnsRequired = 2;
  if (
    (sourceDirection === "E" && xMoves >= 0) ||
    (sourceDirection === "W" && xMoves <= 0)
  ) {
    turnsRequired = updateTurns(yMoves);
  }
  if (
    (sourceDirection === "N" && yMoves >= 0) ||
    (sourceDirection === "S" && yMoves <= 0)
  ) {
    turnsRequired = updateTurns(xMoves);
  }
  return turnsRequired;
};

module.exports = calculateTurns;
