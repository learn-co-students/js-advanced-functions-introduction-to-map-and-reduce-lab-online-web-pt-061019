// Your code here

const mapToNegativize = sourceArray => {
  let results = []
  for (const elem of sourceArray) {
    results.push(elem * -1)
  }
  // return sourceArray.map(x => x * -1)
  return results
}

const mapToNoChange = sourceArray => {
  return sourceArray
}

const mapToDouble = sourceArray => {
  let results = []
  for (const elem of sourceArray) {
    results.push(elem * 2)
  }
  // return sourceArray.map(x => x * 2)
  return results
}

const mapToSquare = sourceArray => {
  let results = []
  for (const elem of sourceArray) {
    results.push(elem ** 2)
  }
  // return sourceArray.map(x => x ** 2)
  return results  
}


const reduceToTotal = (sourceArray, startingPoint = 0) => {
  for (const elem of sourceArray) {
    startingPoint += elem
  }
  return startingPoint
}

const reduceToAllTrue = sourceArray => {
  for (const elem of sourceArray) {
    if (!elem) { return false }
  }
  return true
}

const reduceToAnyTrue = sourceArray => {
  for (const elem of sourceArray) {
    if (elem) { return true }
  }
  return false
}