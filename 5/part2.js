import { log } from "../utils.js";
import { readFileSync } from "fs";

let input = readFileSync("./input.txt", "utf8").split("\n\n");
// let input = readFileSync("./input_test.txt", "utf8").split("\n\n");
log(input);
let ranges = input[0]
  .split("\n")
  .map((row) => row.split("-"))
  .map((range) => [Number(range[0]), Number(range[1])]);

log(ranges);

const sorted = ranges.sort((a, b) => a[0] - b[0]);
log(sorted);
let flatRanges = [];

for (const r of ranges) {
  const len = flatRanges.length;
  if (len == 0 || r[0] > flatRanges[len - 1][1]) {
    flatRanges.push(r);
  } else {
    flatRanges[len - 1][1] = Math.max(r[1], flatRanges[len - 1][1]);
  }
}

log(flatRanges);

let ans = 0n;
for (const r of flatRanges) {
  ans += BigInt(r[1]) - BigInt(r[0]) + 1n;
}

log("ans", ans);
