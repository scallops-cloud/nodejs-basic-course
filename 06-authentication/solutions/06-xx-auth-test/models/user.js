import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class User {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  static findOne({ email }) {
    const users = readUsers();
    const user = users.find((user) => user.email === email);
    return user;
  }

  save = () => {
    // save the users data to local json file
    const users = readUsers();
    users.push(this);
    console.log(users);
    writeUsers(users);
  };
}

const readUsers = () => {
  // read the users data from local json file
  const filePath = path.join(__dirname, "./users.json");
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
};

const writeUsers = (users) => {
  // write the users data to local json file
  const filePath = path.join(__dirname, "./users.json");
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
