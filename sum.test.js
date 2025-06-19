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

  const fakeFetchWithJestMockupFn = jest.fn().mockReturnValue(Promise.resolve({ json: () => Promise.resolve([
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
    ]) }))

  const sumReturned = await sum(fakeFetchWithJestMockupFn, 4);
  expect(sumReturned).toBe(14);
  expect(fakeFetchWithJestMockupFn).toHaveBeenCalledWith('https://fake-json-api.mock.beeceptor.com/users')

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
