// Your code here
const mapToNegativize = function(arr){
  const resultArray = [];
  for (const el of arr){
    resultArray.push(el * -1);
  }
  return resultArray;
}

const mapToNoChange = function(arr){
  return arr;
}

const mapToDouble = function(arr){
  const resultArray = [];
  for (const el of arr){
    resultArray.push(el *2);
  }
  return resultArray;
}

const mapToSquare = function(arr){
  const resultArray = [];
  for (const el of arr){
    resultArray.push(el* el);
  }
  return resultArray;
}

const reduceToTotal = function(sourceArray, startingPoint){
  let total = 0;
  sourceArray.forEach(function (el){
    total +=el;
  });
  return (startingPoint > 0)? total + startingPoint : total;
}

const reduceToAllTrue = function(arr){
  for (const val of arr){
    if (val) {
      
    } else {
        return false;
    }
  }
  return true;
}

reduceToAnyTrue = function(arr){
  for (const val of arr){
    if (val) {
      return true;
    } 
  }
  return false
}