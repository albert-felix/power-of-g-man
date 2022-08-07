// Function to calculate the turns required
const calculateTurns = (sourceDirection, xMoves, yMoves) => {

    let turnsRequired = 2;
    if((sourceDirection === 'E' && xMoves >= 0) || (sourceDirection === 'W' && xMoves <= 0)){
        if(yMoves === 0){
            turnsRequired = 0
        }else{
            turnsRequired -= 1
        }
    }
    if((sourceDirection === 'N' && yMoves >= 0) || (sourceDirection === 'S' && yMoves <= 0)){
        if(xMoves === 0){
            turnsRequired = 0
        }else{
            turnsRequired -= 1
        }
    }
    return turnsRequired;
    
};

module.exports = calculateTurns;