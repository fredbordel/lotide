const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

/*const takeUntil = function(array, callback) {
 let newArray = [];
 for (element in array) {
   if (callback(array[element])) {
    newArray.push(array[element]);
  } return newArray
 } 
};
*/

const takeUntil = function(array, callback) {
  let newArr = []; 
  for (let item in array) {
    if (callback(array[item]) === false) {
      newArr.push(array[item])
      } else if (callback(array[item]) === true)
        return newArr
    }
  };




const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);