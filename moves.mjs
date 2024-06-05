// to keep the possible next move in the 8 * 8 board
function inRange([x, y]) {
  return x >= 0 && x <= 7 && y >= 0 && y <= 7;
}
// to check for the range then push the possible move to an array
function addToArray([x, y], arr) {
  if (inRange([x, y])) arr.push([x, y]);
}

export default function moves([x, y]) {
  const possibleMoves = [];
  // generate every possible move to [x, y], then add it an array if it isn't out of range using addToArray()
  addToArray([x + 1, y + 2], possibleMoves);
  addToArray([x + 1, y - 2], possibleMoves);
  addToArray([x - 1, y + 2], possibleMoves);
  addToArray([x - 1, y - 2], possibleMoves);
  addToArray([x + 2, y + 1], possibleMoves);
  addToArray([x + 2, y - 1], possibleMoves);
  addToArray([x - 2, y + 1], possibleMoves);
  addToArray([x - 2, y - 1], possibleMoves);

  return possibleMoves;
}
