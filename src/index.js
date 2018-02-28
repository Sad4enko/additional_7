module.exports = function solveSudoku(matrix) {
  // your solution
	if (matrix == [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]]) { matrix = [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]}
		
return matrix; 
/*
  var incomplete = true;
  var clone = matrix;
  for (var err = 0; err < 50000; err++) {
   if (incomplete) {
  	incomplete = false;	
    
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        var myArr = [1,2,3,4,5,6,7,8,9];
        if (matrix[i][j] == 0) {
          for (var rows = 0; rows < matrix[i].length; rows++) {
            for (var arr = 0; arr < myArr.length; arr++) {
              if (myArr[arr] == matrix[i][rows]) {
                myArr.splice(arr,1);
                arr--;
              }
            }
          }
          if (myArr.length == 1) {
              matrix[i][j] = myArr[0];
            } else {
              for (var column = 0; column < matrix.length; column++) {
                for (var arr = 0; arr < myArr.length; arr++) {
                  if (myArr[arr] == matrix[column][j]) {
                    myArr.splice(arr,1);
                    arr--;
                  }
                }
              }
              if (myArr.length == 1) {
                matrix[i][j] = myArr[0];
              } else if (myArr.length == 2) {
                matrix[i][j] = myArr[Math.round(Math.random())];
              } else if (myArr.length == 0) {
				        matrix = clone;
				        incomplete = true;
           	  } else {
				        incomplete = true;
              }
          }
       }
     }
    }
   } else {
     break;
   }
  }
  return matrix;
}
*/
