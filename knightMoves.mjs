import { createAdjacencyList, visited } from "./adjacencyList.mjs";
import node from "./node.mjs";

export default function knightMoves(start, end) {
  // create the chessBoard with every square as the key and its value is all the possible moves from that square
  const chessBoard = createAdjacencyList();
  // make the start point the root of our tree
  const root = node(start, chessBoard[start]);
  // start a queue with the root
  let queue = [root];
  // to push to it the points we traverse until we find out destination(end)
  const path = [];

  while (queue.length > 0) {
    // remove the first item from the tree to start traversing its children
    let pointer = queue.shift();
    // make the isVisited list to update it when we visit a point
    const isVisited = visited();

    // start traversing every child of the dequeued node
    pointer.children.every((child, index) => {
      // check if the child is visited or not, if it isn't we visit it
      if (isVisited[child] === false) {
        // update the isVisited list
        isVisited[child] = true;
        // to make every child a node, child = the current point, chessBoard[child] = the points we can go to from the current point, pointer = the child's parent
        pointer.children[index] = node(child, chessBoard[child], pointer);
        // enqueue the current point
        queue.push(pointer.children[index]);
      }
      // to check if we reached the end point
      if (child[0] === end[0] && child[1] === end[1]) {
        // keep track of the point we're on right now
        let currentVertex = pointer.children[index];
        // start a loop to update the path[]
        while (currentVertex.parent !== null) {
          // add the square we're on
          path.unshift(currentVertex.square);
          // to keep going to the parent of the square we're on until we reach the root(start) square
          currentVertex = currentVertex.parent;
        }
        // finally we add the start point to the beginning of the array
        path.unshift(start);
        // empty the queue
        queue = [];
        return false; //to exit in case we find the end point
      } else {
        // to go to the next child in case we don't find the end point
        return true;
      }
    });
  }
  return path;
}


