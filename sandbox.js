const fetch = require("node-fetch");

async function sum(a) {
  const response = await fetch(
    `https://fake-json-api.mock.beeceptor.com/users`
  );
  const jsonResponse = await response.json();
  return a + jsonResponse.length;
}

module.exports = sum;
