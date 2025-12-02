export function log(message, ...optionalParams) {
  console.log(message, ...optionalParams);
}

export function readInput(path) {
  let input = readFileSync(path, "utf8").split("\n");
  log(input.slice(0, 5));
  return input;
}
