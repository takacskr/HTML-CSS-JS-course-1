let celsiusArr = ['-2', '42', '17.8', '22.5', '25.8', '32', '10'];

let numericArr = celsiusArr.map((value) => parseFloat(value));

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
console.log(numericArr);
