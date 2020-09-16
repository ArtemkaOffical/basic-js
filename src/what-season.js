const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  var obj ={spring:[3,2,4],winter:[0,1,11],summer:[5,6,7],autumn:[9,10,8]}
  
  if(date == null) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('getMonth')) {
   throw new Error();
  }

  for (const property in obj) 
  {
  for(i=0;i<obj[property].length;i++)
  {
   
    if(date.getMonth()==obj[property][i])
    {
      return property; 
    }
  }
  };
  
};
