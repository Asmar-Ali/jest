const sum = require("./sum");

it("fetch users api works correctly", async () => {
  const fakeFetch = (url) => {
    expect(url).toBe("https://fake-json-api.mock.beeceptor.com/users");
    return Promise.resolve({ json: () => Promise.resolve([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]) });
  };
  const sumReturned = await sum(fakeFetch, 4);
  expect(sumReturned).toBe(14);
});

it("num to add is missing", async () => {
    const fakeFetch = (url) => {
    expect(url).toBe("https://fake-json-api.mock.beeceptor.com/users");
    return Promise.resolve({ json: () => Promise.resolve([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]) });
  };
  const sumReturned = await sum(fakeFetch);
  expect(sumReturned).toBeNaN();
});
