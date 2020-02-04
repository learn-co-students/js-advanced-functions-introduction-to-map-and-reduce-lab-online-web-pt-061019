// Your code here
function mapToNegativize(baseArray){
    return baseArray.map(x => x * -1);
}

function mapToNoChange(baseArray){
    return baseArray.map(x => x)
}

function mapToDouble(baseArray){
    return baseArray.map(x => x * 2)
}

function mapToSquare(baseArray){
    return baseArray.map(x => Math.pow(x, 2))
}

function reduceToTotal(baseArray, startingRun = 0){
    const reducer = function(accumulator, currentValue) {return accumulator + currentValue}
    return baseArray.reduce(reducer, startingRun)
}

function reduceToAllTrue(baseArray){
    const reducer = function(accumulator, currentValue) {
        if (!!accumulator == true && !!currentValue == true){
            return true;
        } else {
            return false;
        }
    }
    return baseArray.reduce(reducer, true)
}

function reduceToAnyTrue(baseArray){
    const reducer = function(accumulator, currentValue) {
        if (!!accumulator == true){
            return true;
        } else {
            return !!currentValue
        }
    }
    return baseArray.reduce(reducer, false)
}