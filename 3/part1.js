import { log } from "../utils.js";
import { readFileSync } from "fs";

// let input = readFileSync("./input.txt", "utf8").split("\n");
let input = readFileSync("./input_test.txt", "utf8").split("\n");
log(input);

let sum = 0;

for (const line of input) {
  const bank = line.split("").map((c) => Number(c));
  log("\n\n\n");
  log("bank", bank);
  const len = bank.length;
  let maxesRight = Array(len).fill(0);
  let maxesLeft = Array(len).fill(0);
  let maxes = Array(len).fill(0);

  maxesRight[len - 1] = bank[len - 1];
  maxesLeft[0] = bank[0];

  for (let i = 1; i < len; i++) {
    maxesLeft[i] = Math.max(maxesLeft[i - 1], bank[i]);
  }

  for (let j = len - 2; j >= 0; j--) {
    maxesRight[j] = Math.max(maxesRight[j + 1], bank[j + 1]);
  }
  log("maxesLeft", maxesLeft);
  log("maxesRight", maxesRight);

  for (let i = 0; i < len - 1; i++) {
    maxes[i] = Number(maxesLeft[i] + "" + maxesRight[i]);
  }
  log("maxes", maxes);

  let max1 = 0,
    max2 = 0;
  for (const battery of bank) {
    if (battery > max1) {
      max1 = battery;
    }
  }

  const sorted = maxes.sort((a, b) => b - a);
  const max = Math.max(...maxes);
  // log("ans", sorted[0]);
  log("ans", max);
  sum += max;
}

log("sum", sum);
