function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middle = array.length / 2;
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
  const arrayResultado = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      arrayResultado.push(rightArray[0]);
      rightArray.splice(0, 1);
    } else {
      arrayResultado.push(leftArray[0]);
      leftArray.splice(0, 1);
    }
  }

  while (rightArray.length > 0) {
    arrayResultado.push(rightArray[0]);
    rightArray.splice(0, 1);
  }

  while (leftArray.length > 0) {
    arrayResultado.push(leftArray[0]);
    leftArray.splice(0, 1);
  }
  return arrayResultado;
}

console.log(mergeSort([5, 2, 1, 6, 3, 4]));
