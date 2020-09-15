const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum=0;
for(i=0;i<matrix.length;i++)
{
  for(let j=0;j<matrix[0].length;j++)
  {
    if(matrix[i][j]=="^^")
    {
      sum++;
    }
  }
}

return sum;
};
