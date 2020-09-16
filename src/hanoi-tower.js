const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = TurnsNumber(disksNumber);
  return {
    turns: turns,
    seconds:parseInt( turns / (turnsSpeed / 3600))
};
};
function TurnsNumber(n)
{
  if (n == 0) return 0;
    return 2 * TurnsNumber(n - 1) + 1;
}
