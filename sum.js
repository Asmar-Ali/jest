
async function sum(fetch, a) {
  const response = await fetch(
    `https://fake-json-api.mock.beeceptor.com/users`
  );
  const jsonResponse = await response.json();
  console.log("A", jsonResponse , typeof jsonResponse)
  return a + jsonResponse.length;
}

module.exports = sum;
