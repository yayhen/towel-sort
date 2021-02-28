
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let towelMatrix = [];
  let direction = true;
  let towelMatrixTrash = matrix.map((item, ind) =>{
    if (ind % 2 == 0) {
      towelMatrix=towelMatrix.concat(item);
    } else {
      towelMatrix=towelMatrix.concat(item.reverse());
    }
  });

  return towelMatrix;
}
