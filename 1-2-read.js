const fs = require("fs");

fs.readFile("./data.txt", (err, data) => {
  console.log(data.toString());
});
