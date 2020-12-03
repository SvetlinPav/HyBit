const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("pavlov")).toEqual(
      "fc9c6940a9162937a02380419b64fd7d38c9de6a6502baa49d16571408ec01a2"
    );
  });

  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });
});
