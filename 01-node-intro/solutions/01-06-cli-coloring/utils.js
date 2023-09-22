import fs from "fs";
import clc from "cli-color";

const filePath = "data.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath);
  console.log(clc.blue.bgYellowBright.bold("File Content:"));

  console.log(content.toString());
}

export function clear() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}
