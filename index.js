// Your code here
function mapToNegativize (arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el * -1);
  }
  return resultArray;
}

const mapToNoChange = function(src){
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i]) // Unique work
  }
  return r
}

const mapToDouble = function(arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el *2);
  }
  return resultArray;
}

const mapToSquare = function(arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el * el);
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