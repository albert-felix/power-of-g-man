const fs = require("fs");
const calculateTurns = require("./calculateTurns");

const gPower = () => {
    try{
        // Reading inputs from file and formatting
        const filename = process.argv[2];
        const inputFile = fs.readFileSync(filename, "utf-8");
        const rawInputLines = inputFile.toString().split("\n");
        const inputLines = rawInputLines.map(input => input.trim());
        
        // Getting source point, destination points and source direction
        const source = inputLines[0].split(" ");
        const destination = inputLines[1].split(" ");
        const sourcePoint = source.slice(1,3);
        const sourceDirection = source[3];
        const destinationPoint = destination.slice(1,3);

        // Calculating moves and turns required
        const xMoves = destinationPoint[0] - sourcePoint[0];
        const yMoves = destinationPoint[1] - sourcePoint[1];
        const movesRequired = Math.abs(xMoves) + Math.abs(yMoves);
        const turnsRequired = calculateTurns(sourceDirection,xMoves,yMoves);
        
        // Getting final result
        const initialPower = 200;
        const powerConsumed = (movesRequired * 10) + (turnsRequired * 5);
        const remainingPower = initialPower - powerConsumed;
        console.log(`POWER ${remainingPower}`);
        return `POWER ${remainingPower}`;

    }catch(e){
        console.log("error", e);
    }
};

gPower();
module.exports = gPower;