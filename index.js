function mapToNegativize(sourceArray){
    // let negatives = sourceArray.map(num => num * -1)
    // return negatives
    let negatives = []
    for (let i = 0; i < sourceArray.length; i++ ) {
    negatives.push(-1 * sourceArray[i])
  }
  return negatives
}

function mapToNoChange(sourceArray){
    let same = []
    for (let i = 0; i < sourceArray.length; i++ ) {
    same.push(sourceArray[i])
  }
  return same
}

function mapToDouble(sourceArray){
    // let doubles = sourceArray.map(num => num * 2)
    // return doubles
    let doubles = []
    for (let i = 0; i < sourceArray.length; i++ ) {
    doubles.push(2 * sourceArray[i])
  }
  return doubles
}

function mapToSquare(sourceArray){
    // let roots = sourceArray.map(num => num * num)
    // return roots
    let squares = []
    for (let i = 0; i < sourceArray.length; i++ ) {
    squares.push(sourceArray[i] * sourceArray[i])
  }
  return squares
}  

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
    total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) 
            return false
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) 
            return true
    }
    return false
}