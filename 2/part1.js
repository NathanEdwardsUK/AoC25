import { log } from "../utils.js";
import { readFileSync } from "fs";

let input = readFileSync("./input.txt", "utf8").split(",");
// let input = readFileSync("./input.txt", "utf8").split(",");
log(input);

let invalidIds = [];

for (const range of input) {
  const [startStr, endStr] = range.trim().split("-");
  const start = Number(startStr);
  const end = Number(endStr);
  log("startStr, endStr", startStr, endStr);
  log("start, end", start, end);
  // log("size", end - start);

  const halfIdx = Math.ceil(startStr.length / 2);
  // let half = Number(startStr.slice(0, halfIdx));
  let half = Number(10 ** (halfIdx - 1));

  let repeatNum = Number("" + half + half);

  log("halfIdx", halfIdx);
  log("half", half);
  log("repeatNum", repeatNum);

  while (repeatNum <= end) {
    if (repeatNum >= start) {
      invalidIds.push(repeatNum);
    }
    half++;
    repeatNum = Number("" + half + half);
  }
}
log(invalidIds);

log(invalidIds.reduce((sum, id) => sum + id, 0));
