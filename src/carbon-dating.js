const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  try{
    let num = parseFloat(sampleActivity);
    if (typeof(sampleActivity) == typeof("string") && (num > 0 && num < MODERN_ACTIVITY))
    {
        let age = Math.ceil(Math.log(MODERN_ACTIVITY / num)*HALF_LIFE_PERIOD/0.693);
        return age;  
    }
  }
  catch(ex){
  }
return false;
};
 
