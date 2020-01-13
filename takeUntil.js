
const takeUntil = function(array, callback) {
  let newArr = []; 
  for (let item in array) {
    if (callback(array[item]) === false) {
      newArr.push(array[item])
      } else if (callback(array[item]) === true)
        return newArr
    }
  };

module.exports = takeUntil;