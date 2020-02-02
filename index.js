// Your code here
function mapToNegativize (arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el * -1);
  }
  return resultArray;
}

function mapToNoChange(src){
  let r = []
  for (let i = 0; i < src.length; i++ ) {
    r.push(src[i]) // Unique work
  }
  return r
}

function mapToDouble(arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el *2);
  }
  return resultArray;
}

function mapToSquare(arr){
  let resultArray = [];
  for (const el of arr){
    resultArray.push(el * el);
  }
  return resultArray;
}

function reduceToTotal (sourceArray, startingPoint=0){
  let total = startingPoint;
  sourceArray.forEach(function (el){
    total +=el;
  });
  // return (startingPoint > 0)? total + startingPoint : total;
  return total
}

function reduceToAllTrue(arr){
  for (const val of arr){
    if (val) {
      
    } else {
        return false;
    }
  }
  return true;
}

function reduceToAnyTrue (arr){
  for (const val of arr){
    if (val) {
      return true;
    } 
  }
  return false
}