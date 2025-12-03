import { start } from "repl";
import { log } from "../utils.js";
import { readFileSync } from "fs";

// let input = readFileSync("./input.txt", "utf8").split("\n");
let input = readFileSync("./input_test.txt", "utf8").split("\n");
log(input);

function findFirstMax(array, startIdx, endIdx) {
  let idxMax = startIdx;
  let max = array[startIdx];

  for (let i = startIdx; i < endIdx; i++) {
    if (array[i] > max) {
      max = array[i];
      idxMax = i;
    }
  }
  return [max, idxMax];
}

const LEN_ARRAY = 12;
let sum = 0;

for (const line of input) {
  const bank = line.split("").map((c) => Number(c));
  log("\n");
  log("bank", bank);
  const len = bank.length;

  // let [localMax, localMaxIdx] = findFirstMax(bank, 0, len - LEN_ARRAY + 1);
  let [localMax, localMaxIdx] = [0, -1];
  let ans = "";

  for (let n = 0; n < LEN_ARRAY; n++) {
    [localMax, localMaxIdx] = findFirstMax(
      bank,
      localMaxIdx + 1,
      len - LEN_ARRAY + n + 1
    );
    ans = ans + localMax;
  }

  // const [firstMax, firstMaxIdx] = findFirstMax(bank, 0, len - 1);
  // const [secondMax, secondMaxIdx] = findFirstMax(bank, firstMaxIdx + 1, len);
  // log("firstMax", firstMax);
  // log("firstMaxIdx", firstMaxIdx);
  // log("secondMax", secondMax);
  // log("secondMaxIdx", secondMaxIdx);
  const joltage = Number(ans);
  log("joltage", joltage);
  sum += joltage;
}

log("sum", sum);
