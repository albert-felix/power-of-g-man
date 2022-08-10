const fs = require("fs");
const calculateTurns = require("./calculateTurns");

const calculateGPower = (filename) => {
  // Reading inputs from file and formatting
  const inputFile = fs.readFileSync(filename, "utf-8");
  const rawInputLines = inputFile.toString().split("\n");
  const inputLines = rawInputLines.map((input) => input.trim());

  // Getting source point, destination points and source direction
  const [source, destination] = inputLines;
  const [sourceX, sourceY, sourceDirection] = source.split(" ").splice(1);
  const [destinationX, destinationY] = destination.split(" ").splice(1);

  // Calculating moves and turns required
  const horizontalMoves = destinationX - sourceX;
  const verticalMoves = destinationY - sourceY;
  const movesRequired = Math.abs(horizontalMoves) + Math.abs(verticalMoves);
  const turnsRequired = calculateTurns(
    sourceDirection,
    horizontalMoves,
    verticalMoves
  );

  const initialPower = 200;
  const movePoints = 10;
  const turnPoints = 5;
  const powerConsumed = movesRequired * movePoints + turnsRequired * turnPoints;
  const remainingPower = initialPower - powerConsumed;
  return `POWER ${remainingPower}`;
};

module.exports = calculateGPower;
