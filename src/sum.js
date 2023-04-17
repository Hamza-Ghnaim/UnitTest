function sum(a, b) {
  if (a >= 0) {
    return a + b;
  } else if (b < 0) {
    return b;
  } else return 0;
}
module.exports = sum;
