const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  try{
  var CommandName="";
  for(j=0;j<members.length;j++)
{
  if(typeof(members[j])==typeof('string'))
  for(i=0;i<members[j].length;i++)
  {
    members[j] = members[j].trim();
    if(i==0)
    {
      
      CommandName +=members[j][i];
      
    }
  }
  CommandName=CommandName.split("").sort().join("").toUpperCase();
};
return CommandName.split("").sort().join('');;
  }catch(ex){}
  return false;
};
 
