/*let flatten = function(arrOfArrays) {
let newSameLevelArray = [];
for (let item of arrOfArrays) {
  if (Array.isArray(item)) {
    newSameLevelArray.push(item.join(' , '))
  } else newSameLevelArray.push(item);
}
return newSameLevelArray;
}; 
*/





let flatten = function(arrOfArrays) {
    let newSameLevelArray = [];
      for (let item of arrOfArrays) {
        if (Array.isArray(item)) {
        for (let element of item) {
        newSameLevelArray.push(element)
} 
  } 
  else {newSameLevelArray.push(item)
  }
  
}
return newSameLevelArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));