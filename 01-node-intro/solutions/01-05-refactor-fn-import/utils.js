import fs from "fs";

const filePath = "data.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
}

export function read() {
  const content = fs.readFileSync(filePath, "utf-8");
  console.log("file content:");
  console.log(content);
}

export function clear() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}
