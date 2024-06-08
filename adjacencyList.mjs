import moves from "./moves.mjs";

// create an adjacency list and populate it with every possible move for every point
export function createAdjacencyList() {
  const list = {};
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      list[[i, j]] = moves([i, j]);
    }
  }
  return list;
}

// to keep track of visited squares
export function visited(vertex) {
  const indexList = {};

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      indexList[[i, j]] = false;
    }
  }
  // returns true if the square has been visited otherwise false
  return indexList;
}
