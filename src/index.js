module.exports = function solveSudoku(matrix) {
  // your solution
  var incomplete = true;
  var clone = matrix;
  for (var err = 0; err < 1000000; err++) {
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
