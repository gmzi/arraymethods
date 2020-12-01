const arr = [
  { name: 'Elie' },
  { name: 'Tim' },
  { name: 'Matt' },
  { name: 'Colt' },
];

function addKeyAndValue1(arr, key, value) {
  return arr.reduce(function (accumulator, nextValue, index) {
    accumulator[index][key] = value;
    return accumulator;
  }, arr);
}

console.log(addKeyAndValue1(arr, 'title', 'Instructor'));

/* 
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}
*/
