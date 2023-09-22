const args = process.argv;

const option = args[2];
const input = args[3];

if (option === "hello") {
  console.log(`Hello, ${input} 👋`);
} else if (option === "bye") {
  console.log(`Bye, ${input} 🥹`);
}
