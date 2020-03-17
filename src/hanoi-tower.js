module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    let answer = {};
    answer.turns = (Math.pow(2, disksNumber) -1);
    answer.seconds = (Math.pow(2, disksNumber) - 1) / (turnsSpeed / 3600);

    return answer;
    
}