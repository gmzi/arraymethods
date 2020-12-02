const arr1 = [5, 6, 7, 8];

function isEven(val) {
  return val % 2 === 0;
}

function partition1(arr, callback) {
  return arr.reduce(function (a, b) {
    if (a === null) {
      a = [[], []];
    }
    if (callback(b)) {
      a[0].push(b);
    } else {
      a[1].push(b);
    }
    return a;
  }, null);
}
console.log(partition1(arr1, isEven));

let caca = [[], []];
const average = arr1.reduce(function (a, b) {
  return a + b / arr1.length;
}, 0);
console.log(average);
