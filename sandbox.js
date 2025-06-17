const fetch = require("node-fetch");
const sum = require("./sum");

async function sandbox() {
  const result = await sum(fetch, 4);
  console.log("Result", result);
}

sandbox()
// module.exports = sum;
