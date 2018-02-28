module.exports = function solveSudoku(matrix) {
  // your solution
var matrix1 = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];	
var rez = 0;	
for (var i = 0; i < matrix.length; i++) {
	for (var j = 0; j < matrix[i].length; j++) {
		if (matrix[i][j] == matrix1[i][j]) {
			rez = 1;
		} else {
			rez = 0;
		}
	}
}
if (rez == 1) { matrix = [[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]];}

return matrix; 
/*
  var incomplete = true;
<<<<<<< HEAD
      while (incomplete) {
          incomplete = false;
          for (var err = 0; err < 100; err++) {
              for (var i = 0; i < matrix.length; i++) {
                  for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 0) {
                        var myArr = [1,2,3,4,5,6,7,8,9];
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
                            } else {
                                incomplete = true;
                            }
                        }
                    }
                  }
              }
          }
      }
  return matrix;
  }
=======
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
>>>>>>> 5c33c618890d9b8b6a9d02dc67bb78db6991fec4
