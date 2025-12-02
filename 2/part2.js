import { log } from "../utils.js";
import { readFileSync } from "fs";

// let input = readFileSync("./input_test.txt", "utf8").split(",");
let input = readFileSync("./input.txt", "utf8").split(",");
log(input);

let invalidIds = new Set();

for (const range of input) {
  const [startStr, endStr] = range.trim().split("-");
  const start = Number(startStr);
  const end = Number(endStr);
  const startLen = startStr.length;
  const endLen = endStr.length;
  //   log("startStr, endStr", startStr, endStr);
  log("start, end", start, end);
  const invalidIdsForThisRange = new Set();

  // len = 3 or len = 4 => halfIdx = 2
  const halfIdx = Math.floor(endLen / 2);

  for (let subLen = 1; subLen <= halfIdx; subLen++) {
    for (let repetitions = 2; repetitions <= endLen / subLen; repetitions++) {
      if (repetitions * subLen < startLen) {
        continue;
      }

      const startRepeat = 10 ** (subLen - 1);
      const endRepeat = 10 ** subLen;
      for (let repeatNum = startRepeat; repeatNum < endRepeat; repeatNum++) {
        const testCode = Number(String(repeatNum).repeat(repetitions));
        if (testCode < start) {
          continue;
        } else if (testCode > end) {
          break;
        } else {
          invalidIds.add(testCode);
        }
      }
    }
  }
}

// const idsArray = Array.from(invalidIds).sort((a, b) => a - b);
// idsArray.forEach((id) => {
//   log(id);
// });

log(invalidIds.values().reduce((sum, id) => sum + id, 0));
