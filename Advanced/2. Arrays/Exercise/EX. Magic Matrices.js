function solve(matrix) {
    let controlSum = matrix[0].reduce((acc, cur) => acc + cur);
  
    //loop through the matrix
    for (let i = 0; i < matrix.length; i++) {
      let rowSum = 0;
      let colSum = 0;
  
      //loop through each row
      for (let j = 0; j < matrix[i].length; j++) {
        rowSum += matrix[i][j];
      }
  
      //loop through each col
      for (let k = 0; k < matrix.length; k++) {
        colSum += matrix[k][i];
      }
  
      //check if the two sums are equal
      if (rowSum !== colSum || rowSum !== controlSum) {
        return false;
      }
    }
  
    return true;
  }
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])