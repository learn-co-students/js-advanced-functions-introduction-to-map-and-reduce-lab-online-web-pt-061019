// Your code here
function mapToNegativize(array) {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] * -1)
    }
    return new_array
}

function mapToNoChange(array) {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i])
    }
    return new_array
}

function mapToDouble(array) {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] * 2)
    }
    return new_array
}

function mapToSquare(array) {
    const new_array = []
    for (let i = 0; i < array.length; i++) {
        new_array.push(array[i] * array[i])
    }
    return new_array
}

function reduceToTotal(array, index=0) {
    for (let i = 0; i < array.length; i++) {
        index = array[i] + index
    }
    return index
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!!array[i] !== true) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
            return true
        }
    }
    return false
}