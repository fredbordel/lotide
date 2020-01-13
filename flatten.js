
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

module.exports = flatten;