// Iteration fibs
function fibs(number) {
  const array = [0, 1];

  if (number <= 0) return "Please enter a number greater than 0";

  if (number === 1) return [0];

  if (number === 2) return array;
  for (let i = 2; i < number; i++) {
    array.push(array[array.length - 2] + array[array.length - 1]);
  }
  return array;
}

console.log(fibs(8)); // returns [0, 1, 1,  2, 3, 5, 8, 13]

// Recursive fibs
const array = [0, 1];
function fibsRec(number) {
  if (array.length >= number) {
    return array;
  }

  const nextFib = array[array.length - 1] + array[array.length - 2];

  array.push(nextFib);

  return fibsRec(number);
}

console.log(fibsRec(8)); // returns [0, 1, 1,  2, 3, 5, 8, 13]
