import moves from "./moves.mjs";

// create multiple arrays in the array (list) 
// each array index represents a point e.g(index 0 represents [0,0] and index 63 represents [7,7])
// and each array represents the squares that the knight can go to from the the current point which is the index

// create an adjacency list and populate it with every possible move for every point from (0, 0) to (7, 7) and each point is represented by the index of the array
// meaning the possible moves for (0,0) can be found at index 0 and for (7,7) we can look at the arrays at index 63
function createAdjacencyList() {
  const list = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      list.push(moves([i, j]));
    }
  }
  return list;
}