import { readFileSync } from "fs";

function log(message, ...optionalParams) {
  console.log(message, ...optionalParams);
}

// let input = readFileSync("./input_test.txt", "utf8").split("\n");
let input = readFileSync("./input.txt", "utf8").split("\n");
log(input.slice(0, 5));

let start = 50;
let count = 0;

function applyMove(start, move) {
  log("start, move", start, move);
  let direction = move[0];
  let size = Number(move.slice(1));
  let change = size * (direction == "L" ? -1 : +1);
  let end = (start + change + 100) % 100;
  log("change, end", change, end);
  return end;
}

// applyMove(50, "L51");

for (const move of input) {
  start = applyMove(start, move);
  if (start == 0) {
    count++;
  }
}

log("count=", count);
