const sum = require("./sandbox");

async function main() {
  const response = await sum(2);
  console.log("Response", response);
}

main();
