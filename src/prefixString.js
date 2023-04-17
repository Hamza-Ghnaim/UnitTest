var isPrefixString = function (s, words) {
  let substring = "";
  for (word of words) {
    substring = substring.concat(word);

    if (
      substring.length > s.length ||
      substring !== s.slice(0, substring.length)
    ) {
      return false;
    }

    if (s === substring) {
      return true;
    }
  }
  return false;
};
module.exports = isPrefixString;
