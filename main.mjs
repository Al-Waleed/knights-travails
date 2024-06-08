import knightMoves from "./knightMoves.mjs";

function prettyPrintPath(array) {
  console.log(
    `=> You made it in ${array.length - 1} moves!  Here's your path:`
  );
  array.forEach((move) => console.log(`-(${move})`) );
}

const firstMove = knightMoves([0, 0], [3, 3]);
const secondMove = knightMoves([0, 0], [7, 7]);
const thirdMove = knightMoves([2,5], [7,6]);

prettyPrintPath(firstMove);
prettyPrintPath(secondMove);
prettyPrintPath(thirdMove);
