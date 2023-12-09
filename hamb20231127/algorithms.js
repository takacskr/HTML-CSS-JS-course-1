let celsiusArr = ['-2', '42', '17.8', '22.5', '25.8', '32', '10'];
console.log(`Az eredeti tömb értéke: ${celsiusArr}`);

// Array forEach()
// The forEach() method calls a function (a callback function) once for each array element

celsiusArr.forEach((value, index) => {
  //console.log(`The temperature in Celsius degree ${index + 1} is ${value}`);
});

console.log(`A celsiusArr értéke: ${celsiusArr}`);
//--------------------------------------------------------------------------------------

// Array map()
// 1. Creates a new array
// 2. Not changes the original array

let doubleCelsiusArr = celsiusArr.map((value) => value * 2);

let numericArr = celsiusArr.map((value) => parseFloat(value));
console.log(`A numericArr értéke: ${numericArr}`);
//--------------------------------------------------------------------------------------

// Array flatMap()
// 1. Maps all elements of an array
// 2. Creates a new array by flattening the array 

const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(`A nestedArray értéke: [[1, 2], [3, 4], [5, 6]]`);

const flattenedArray = nestedArray.flatMap((innerArray) => {
  return innerArray.map((num) => num * 2);
});

console.log(`A flattenedArray értéke: ${flattenedArray}`);
//--------------------------------------------------------------------------------------

// Array filter()
// Creates a new array with array elements that pass a test

const over18 = celsiusArr.filter( (value) => value > 18);
console.log(`Over 18: ${over18}`);
//--------------------------------------------------------------------------------------

// Array reduce()
// Runs a function on each array element to produce (reduce it to) a single value
// It works from left-to-right in the array
// It does not reduce the original array

let sum = celsiusArr.reduce( (total, value) => total + parseFloat(value), 0);
console.log(`After the reduce() function the value of sum: ${sum}`);
//--------------------------------------------------------------------------------------

// Using the JavaScript built-in function for get the min number
const getMinCelsiusDegree = (arr) => {
  return Math.min(...arr);
};

// Using the JavaScript built-in function for get the max number
const getMaxCelsiusDegree = (arr) => {
  return Math.max(...arr);
};

// Bubble sort function
const bubbleShort = (numericArr) => {
  for (j = 0; j < numericArr.length; j++) {
    for (let i = 0; i < numericArr.length; i++) {
      let swap;
      if (numericArr[i + 1] < numericArr[i]) {
        swap = numericArr[i];
        numericArr[i] = numericArr[i + 1];
        numericArr[i + 1] = swap;
      }
    }
  }

  return numericArr;
};

const bubbleSortArray = (arr) => {
  let swap;
  do {
    swap = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap = true;
      }
    }
  } while (swap);

  return arr;
};

function bubbleSortA(arr) {
  let i = 0,
    swapped;
  do {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++)
      if (arr[j] > arr[j + 1])
        ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]), (swapped = true);
  } while (++i < arr.length && swapped);
  return arr;
}

bubbleSortArray(numericArr);
