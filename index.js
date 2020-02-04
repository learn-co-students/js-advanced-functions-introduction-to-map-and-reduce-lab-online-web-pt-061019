// Your code here
function mapToNegativize(arr){
  return arr.map(el => el*-1)
}

function mapToNoChange(arr) {
  return arr.map(el => el)
}

function mapToDouble(arr) {
  return arr.map(el => el*2)
}

function mapToSquare(arr) {
  return arr.map(el => el ** 2)
}

function reduceToTotal(arr, startingPoint=0) {
  let total = startingPoint
  for (let i=0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

function reduceToAllTrue(arr) {
  for (let i=0; i<arr.length; i++) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i=0; i < arr.length; i++) {
    if (arr[i]) return true
  }
  return false
}
