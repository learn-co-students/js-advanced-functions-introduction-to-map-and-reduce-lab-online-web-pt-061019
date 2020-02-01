// Your code here
function mapToNegativize(arr){
  return arr.map(el => el * -1);
} 

function mapToNoChange(arr){
  return arr;
}

function mapToDouble(arr){
  return arr.map(el => el * 2);
}

function mapToSquare(arr){
  return arr.map(el => el ** 2);
}

function reduceToTotal(arr, startingPoint = 0){
  return arr.reduce(function(accumulator, currentVal){return accumulator + currentVal}, startingPoint)
}

function reduceToAllTrue(arr){
  return arr.every(el => !!el);
}

function reduceToAnyTrue(arr){
  return arr.some(el => !!el);
}