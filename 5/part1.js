import { log } from "../utils.js";
import { readFileSync } from "fs";

let input = readFileSync("./input.txt", "utf8").split("\n\n");
// let input = readFileSync("./input_test.txt", "utf8")

let ranges = input[0]
  .split("\n")
  .map((row) => row.split("-"))
  .map((range) => [Number(range[0]), Number(range[1])]);

log(ranges);

let ingredients = input[1].split("\n").map((i) => Number(i));
log(ingredients);

let fresh = [];

for (const i of ingredients) {
  for (const r of ranges) {
    if (i >= r[0] && i <= r[1]) {
      fresh.push(i);
      break;
    }
  }
}

log(fresh.length);
