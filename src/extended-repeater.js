const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
    if(options.repeatTimes ==undefined) options.repeatTimes = 1;
    if(options.separator ==undefined) options.separator = '+'; 
     if(options.additionSeparator ==undefined) options.additionSeparator = '|';  
     if (options.addition === undefined) {
        options.addition = "";
    } else if ( options.addition === null ) {
        options.addition = "null"
} 
     if(options.additionRepeatTimes ==undefined) options.additionRepeatTimes = 1; 
     let array = [];
     let array1 = [];
   for ( let i = 0; i < options.additionRepeatTimes; i++) 
   {
          array.push(options.addition);
      }
      
       str += array.join(options.additionSeparator);
  
      for ( let i = 0; i < options.repeatTimes; i++) 
      {
          array1.push(str);
      }
  
  return array1.join(options.separator);
};
