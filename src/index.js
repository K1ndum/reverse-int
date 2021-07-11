module.exports = function reverse (n) {
    if (n < 0) {
        let num = n * (-1);
        var str = String(num);
    } else {
        let num = n;
        var str = String(num);
    }
  return (str.split('').reverse().join(''));
}
