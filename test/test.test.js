const sum = require("../src/sum.js");
const sub = require("../src/subs.js");
const isPrefixString = require("../src/prefixString.js");

describe("test cases for sum", () => {
  it("adds 1+2 to be 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds -1 + 2 to be 0", () => {
    expect(sum(-1, 2)).toBe(0);
  });

  it("adds -1 + -2 to be -2", () => {
    expect(sum(-1, -2)).toBe(-2);
  });
});

describe("test cases for sub", () => {
  it("substract 2,1 to be 1 ", () => {
    expect(sub(2, 1)).toBe(1);
  });
  it("substract -2,1 to be 0 ", () => {
    expect(sub(-2, 1)).toBe(0);
  });
});

describe("test cases for predix string", () => {
  it("check if iloveleetcode a prefix string of [apples,i,love,leetcode]", () => {
    expect(
      isPrefixString("iloveleetcode", ["apples", "i", "love", "leetcode"])
    ).toBeFalsy();
  });

  it("check if iloveleetcode a prefix string of [i,love,leetcode,apples]", () => {
    expect(
      isPrefixString("iloveleetcode", ["i", "love", "leetcode", "apples"])
    ).toBeTruthy();
  });

  it("check if ccccccccc a prefix string of [c,cc]", () => {
    expect(isPrefixString("ccccccccc", ["c", "cc"])).toBeFalsy();
  });
});
