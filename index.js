// Your code here

function mapToNegativize(sourceArray) {
  let newArray = []

  sourceArray.forEach((item, i) => {
    newArray.push(item * -1)
  });

  return newArray

}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  let newArray = []

  sourceArray.forEach((item, i) => {
    newArray.push(item * 2)
  });

  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []

  sourceArray.forEach((item, i) => {
    newArray.push(item * item)
  });

  return newArray

}

function reduceToTotal(sourceArray, startingPoint) {
  let total = 0

  if (!!startingPoint) {
    total = startingPoint
  }

  sourceArray.forEach((item, i) => {
    total = total + item
  });

  return total

}
function reduceToAllTrue(sourceArray) {

  let result = true

  sourceArray.forEach((item, i) => {
    if (item == false) {
      result = false
    } else {
      result = true
    }
  });

  return result

}

function reduceToAnyTrue(sourceArray) {

  if (sourceArray.find( function(value) { return value == true }) == true) {
    return true
  } else {
    return false
  }

}
