import fs from "fs";

const filePath = "data.txt";

const option = process.argv[2];
const input = process.argv[3];

if (option === "w") {
  fs.appendFileSync(filePath, input + "\n");
  console.log("appended:", input);
} else if (option === "r") {
  const content = fs.readFileSync(filePath, "utf-8");
  console.log("file content:", content);
} else if (option === "c") {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
} else {
  console.log("invalid option");
}
