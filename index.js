// Your code here
function mapToNegativize(sourceArray) {
  const newArray = [];
  for (const el of sourceArray) {
    newArray.push(el - (el * 2));
  };
  return newArray;
};

function mapToNoChange(sourceArray) {
  const newArray = [];
  for (const el of sourceArray) {
    newArray.push(el);
  };
  return newArray;
};

function mapToDouble(sourceArray) {
  const newArray = [];
  for (const el of sourceArray) {
    newArray.push(el * 2);
  };
  return newArray;
};

function mapToSquare(sourceArray) {
  const newArray = [];
  for (const el of sourceArray) {
    newArray.push(el * el);
  };
  return newArray;
};

function reduceToTotal(sourceArray, startingPoint=0) {
  for (const el of sourceArray) {
    startingPoint += el;
  };
  return startingPoint;
};

function reduceToAllTrue(sourceArray) {
  let runningTruthiness = true;
  for (const el of sourceArray) {
    if (!!el === true) {
      runningTruthiness = true;
    } else if (!!el === false) {
      runningTruthiness = false;
    }
  };
  return runningTruthiness;
}

function reduceToAnyTrue(sourceArray) {
  let runningTruthiness = false;
  for (const el of sourceArray) {
    if (!!el === true) {
      runningTruthiness = true;
    }
  };
  return runningTruthiness;
}
