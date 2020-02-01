const mapToNegativize = function(arr) {
    let newArray = []
        for (const el of arr) {
            newArray.push(el * -1)
        }
    return newArray
    // return arr.map(el => el * -1)
}

const mapToNoChange = function(arr) {
    return arr
}

const mapToDouble = function(arr) {
    let newArray = []
        for (const el of arr) {
            newArray.push(el * 2)
        }
    return newArray
    // return arr.map(el => el * 2)
}

const mapToSquare = function(arr) {
    let newArray = []
        for (const el of arr) {
            newArray.push(el ** 2)
        }
    return newArray
    // return arr.map(el => el ** 2)
}

const reduceToTotal = function(arr, startingPoint = 0) {
    let total = startingPoint
    for (const el of arr) {
        total += el
    }
    return total
    // return arr.reduce(function(total, el) { return el + total})
}

const reduceToAllTrue = function(arr) {
    // let value = true
    for (const el of arr) {
        // !!el ? undefined : value = false
        if(!el) { return false} 
    }
    return true
    // return value
    // return arr.every(el => !!el)
}

const reduceToAnyTrue = function(arr) {
    for (const el of arr) {
        if (!!el) { return true }
    }
    return false
    // return arr.some(el => !!el)
}