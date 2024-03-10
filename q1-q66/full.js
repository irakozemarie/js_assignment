// //  a function that returns the sum of 2 numbers
// function sum(x, y) {
//    return x + y;
//   }
//   var result = sum(15,5);
//    console.log(result); 

// //   //a function that returns the product of 2 numbers
//   function Product(x, y) {
//     return x * y;
//   }
//   var result = Product(15,5);
//   console.log(result); 

// //a function that returns the subtraction of 2 numbers
// function Sub(x, y) {
//     return x - y;
//   }
//   var result = Sub(15,5);
//   console.log(result); 

//   //a function that returns the division of 2 numbers
// function Div(x, y) {
//     return x / y;
//   }
//   var result = Div(15,5);
//   console.log(result); 

//a function that receives an array and returns the sum of all the elements inside that array.
// function sumArrayElements(arr) {
//     var sum = 0;
    
//     for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
    
//     return sum;
//   }
//   var numbers = [1, 2, 3, 4, 5];
//   var result = sumArrayElements(numbers);
//   console.log(result); 

//   //function of array to return sum of 10 number

//   function sumArrayElements() {
//     var sum = 0;
    
//     for (var i = 0; i < 10; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   var result = sumArrayElements();
// Create a function that receives an array and returns the greatest value inside that array

// function findMaxValue(arr) {
//     if (arr.length === 0) {
//       return undefined; // Return undefined for an empty array
//     }
    
//     var max = arr[0];
    
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
    
//     return max;
//   }
//   var numbers = [1, 5, 2, 9, 3];
//   var result = findMaxValue(numbers);
//   console.log(result); 

  //  Create a function that receives an array and returns the smallest number from that array
//   function findMinValue(arr) {
//     if (arr.length === 0) {
//       return undefined; // Return undefined for an empty array
//     }
    
//     var min = arr[0];
    
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
    
//     return min;
//   }
//   var numbers = [1, 5, 2, 9, 3];
//   var result = findMinValue(numbers);
//   console.log(result); 

//
// function calculateAverage(arr) {
//     if (arr.length === 0) {
//       return undefined; // Return undefined for an empty array
//     }
    
//     var sum = 0;
    
//     for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
    
//     var average = sum / arr.length;
    
//     return average;
//   }
//   var numbers = [1, 2, 3, 4, 5];
//   var result = calculateAverage(numbers);
//   console.log(result);

//average of 10 number

// function Average() {
//     var sum = 0;
    
//     for (var i = 0; i < 10; i++) {
//       sum += i;
//       var average=sum/10;
//     }
    
//     return average;
//   }
//   var result = Average();
//   console.log(result);

//  Create a function that combines two arrays into one single array. 
// function combineArrays(arr1, arr2) {
//     return arr1.concat(arr2);
//   }
//   var arrange = ['a', 'b', 'c', 'd'];
//   var arrayTo = ['e', 'f', 'g'];
//   var combinedArray = combineArrays(arrange, arrayTo);
//   console.log(combinedArray);

  //  Create a function that displays a pattern like this:
//   function displayPattern(rows, columns) {
//     for (var i = 0; i < rows; i++) {
//       var row = "";
//       for (var j = 0; j < columns; j++) {
//         row += "* ";
//       }
//       console.log(row);
//     }
//   }
//   displayPattern(4, 5);

//Create a function that displays a pattern like this:
// function displayPattern(rows) {
//     for (var i = rows; i >= 1; i--) {
//       var row = "";
//       for (var j = 1; j <= i; j++) {
//         row += "1 ";
//       }
//       console.log(row);
//     }
//   }
//   displayPattern(4);
  //
//   function displayPattern(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let row = "";
//         for (let j = 0; j < cols; j++) {
//             if (j < cols - i) {
//                 row += "1 ";
//             } else {
//                 row += "0 ";
//             }
//         }
//         console.log(row);
//     }
// }
// displayPattern(4, 4);

//
// function displayPattern(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let row = "";
//         for (let j = 0; j < cols; j++) {
//             if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
//                 row += "1 ";
//             } else {
//                 row += "0 ";
//             }
//         }
//         console.log(row);
//     }
// }
// displayPattern(5, 5);

//
// function displayPattern(rows) {
//     for (var i = rows; i >= 1; i--) {
//         var row = "";
//         for (var j = 1; j <= rows; j++) {
//           if (j === i) {
//             row += "1";
//           } else {
//             row += " ";
//           }
//         }
//         console.log(row);
//         }  
//     }
//     displayPattern(4);


//
// function reverseArray(array) {
//     var reversedArray = array.reverse();
//     return reversedArray;
//   }
//   var array = [1, 3, 4, 3, 7, 8, 0, 12, 19];
//   var reversed = reverseArray(array);
//   console.log(reversed);

//   //
//   var someNumbers = [3, 4, 8, 2, 1, 2, 2, 6, 3, 4];

//   function modifyAndSort(array) {
      
//       var firstThree = array.slice(0, 3);
//       var lastThree = array.slice(-3);
//       var sortedArray = array.sort((a, b) => a - b);
//       return lastThree.concat(sortedArray, firstThree);
//   }
//   var modifiedSortedNumbers = modifyAndSort(someNumbers);
//   console.log(modifiedSortedNumbers);
  //
//   function getAgeClassification(age) {
//     if (age >= 0 && age <= 12) {
//       return "MIMICRY";
//     } else if (age >= 13 && age <= 19) {
//       return "SELF-DISCOVERY";
//     } else if (age >= 20 && age <= 45) {
//       return "COMMITMENT";
//     } else {
//       return "LEGACY";
//     }
//   }
//   var age = 15;
//   var classification = getAgeClassification(age);
//   console.log(classification);
// function calculateBMI(weight, height) {
//     var bmi = weight / (height * height);
//     return bmi;
//   }
  
//   function getBMIClassification(bmi) {
//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi >= 18.5 && bmi < 25) {
//       return "Normal weight";
//     } else if (bmi >= 25 && bmi < 30) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
//   }
//   var weight = 70; // kg
//   var height = 1.75; // meters
  
//   var bmi = calculateBMI(weight, height);
//   var classification = getBMIClassification(bmi);
  
//   console.log("BMI:", bmi.toFixed(1));
//   console.log("Classification:", classification);

//   //  Create a function that counts the number of characters that make up a string.
//   function countCharacters(str) {
//     var characterCount = 0;
    
//     for (var i = 0; i < str.length; i++) {
//       if (str[i] !== " ") {
//         characterCount++;
//       }
//     }
    
//     return characterCount;
//   }
//   var string = "I TECH";
//   var characterCount = countCharacters(string);
//   console.log("Number of characters:", characterCount);

  //Create a function that displays an even number between 1 and 100
//   function displayEvenNumber() {
//     for (var i = 2; i <= 100; i += 2) {
//       console.log(i);
//     }
//   }
//   displayEvenNumber();
// Write a function that calculates the square of a number.
// function calculateSquare(n) {
//     var square = n * n;
//     return square;
//   }
//   var n = 3;
//   var square = calculateSquare(n);
//   console.log("Square:", square);
  //  Write a function that checks if a number is even.
//   function isEven(number) {
//     return number % 2 === 0;
//   }
//   var number = 4;
//   console.log(isEven(number));
  // Write a function that checks if a number is odd.
//   function isOdd(number) {
//     return number % 2 !== 0;
//   }
//  console.log(isOdd(3));
// console.log(isOdd(4));
//Write a function that returns the maximum of two numbers.
// function maxOfTwoNumbers(a, b) {
//     return Math.max(a, b);
//   }
//   console.log(maxOfTwoNumbers(5, 8));
  //  Write a function that returns the minimum of two numbers. 
//   function minOfTwoNumbers(a, b) {
//     return Math.min(a, b);
//   }
//   console.log(minOfTwoNumbers(5, 8));
//Write a function that calculates the factorial of a number.
// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }
//   console.log(factorial(5)); 
// console.log(factorial(0)); 
//  Write a function that reverses a string.
// function reverseString(str) {
//     return str.split('').reverse().join(''); //splits the string into an array of individual characters and reverses the order of the elements in the array after that joins the elements of the reversed array
//   }
//   console.log(reverseString('chanceline')); 
// console.log(reverseString('OpenAI'));      
// console.log(reverseString('12345')); 
// Write a function that checks if a string is a palindrome.
// function isPalindrome(str) {
//     let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello")); 
//  Create a function that displays odd numbers between 1 and 100
// function displayOddNumbers() {
//     for (let i = 1; i <= 100; i += 2) {
//       console.log(i);
//     }
//   }
//   displayOddNumbers();
  //    Create a function that displays multiples of 5
//   function displayMultiplesOfFive() {
//     for (let i = 5; i <= 50; i += 5) {
//       console.log(i);
//     }
//   }
//   displayMultiplesOfFive();
  // Create a function that returns the square root of a given number.
//   function squareRoot(number) {
//     return Math.sqrt(number);
//   }
// console.log(squareRoot(25));   
// Create a function that receives two numbers and returns the bigger number.
// function findBiggerNumber(a, b) {
//     return Math.max(a, b);
//   }
  
// console.log(findBiggerNumber(8, 3)); 
 //  Create a function that receives a string and changes it into capital letters.
// function convertToUpperCase(str) {
//     return str.toUpperCase();
//   }
//   console.log(convertToUpperCase('irakoze'));    

// function stringModifier(str, position, character) {
//     position--;

//     // Check if the position is valid
//     if (position < 0 || position >= str.length) {
//         return "Invalid position!";
//     }

//     // Split the string into an array of characters
//     let strArray = str.split('');

//     // Modify the character at the specified position
//     strArray[position] = character;

//     // Join the modified array back into a string
//     return strArray.join('');
// }
// let modifiedString = stringModifier("chanceline", 3, "o");
// // console.log(modifiedString); 
// //
// function countVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
  
//     for (let char of str.toLowerCase()) {
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
//   console.log(countVowels('chanceline'));     // Output: 4

//   //Write a function that counts the number of consonants in a string.
//   function countConsonants(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
  
//     for (let char of str.toLowerCase()) {
//       if (!vowels.includes(char) && /[a-z]/.test(char)) {
//         count++;
//       }
//     }
  
//     return count;
//   }
//   console.log(countConsonants('chanceline')); 
//  Write a function that finds the index of a given character in a string.

// function findCharacterIndex(str, char) {
//     return str.indexOf(char);
//   }
//   console.log(findCharacterIndex('irakoze', 'o'));  
  //  Write a function that removes duplicates from an array.
//   function removeDuplicates(array) {
//     return [...new Set(array)];
//   }
//   console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); 

  // Write a function that checks if a given value is present in an array.
//   function checkValueInArray(array, value) {
//     return array.includes(value);
//   }
//   console.log(checkValueInArray(['apple', 'banana', 'orange'], 'apple'));  
// Write a function that squares each element of an array.
// function squareArrayElements(array) {
//     // Use map() function to square each element of the array
//     let squareArray = array.map(element => element * element);
//     return squareArray;
// }
// let array = [1, 2, 3, 4, 5];
// let squareArray = squareArrayElements(array);
// console.log(squareArray); 
// Write a function that returns the first n elements of an array.
// function getFirstNElements(array, n) {
//     // Use slice() function to get the first n elements of the array
//     return array.slice(0, n);
// }
// let array = [1, 2, 3, 4, 5];
// let n = 2;
// let firstNElements = getFirstNElements(array, n);
// console.log(firstNElements); 
//Write a function that removes the last element from an array.
// function removeLastElement(array) {
//     array.pop();
//     return array;
//   }
//   let arrayx = [7, 6, 3, 4, 5];
// console.log(removeLastElement(arrayx ));   
// Write a function that sorts an array of numbers in ascending order.
// function sortNumbersAscending(array) { 
//     return array.slice().sort((a, b) => a - b);
//   }
//   let Asc = [5, 2, 8, 4,3,6, 1];
// console.log(sortNumbersAscending(Asc)); 
                

// function allPositive(arr){
//     return arr.every(num => num > 0);
// }
    

// // Example usage:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [-1, 2, 3, 4, 5];

// console.log(allPositive(array1)); // Output: true
// console.log(allPositive(array2)); // Output: false



// 44. Write a function that checks if all elements in an array are positive.
const allPositive = arr => arr.every(num => num > 0);

// 45. Write a function that calculates the sum of the even numbers in an array.
const sumOfEven = arr => arr.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);

// 46. Write a function that converts an array of strings to uppercase.
const toUpperCase = arr => arr.map(str => str.toUpperCase());

// 47. Write a function that generates a random number between a given range.
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 48. Write a function that returns the reverse of an array.
const reverseArray = arr => arr.slice().reverse();

// 49. Write a function that calculates the Fibonacci sequence up to n numbers.
const fibonacci = n => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
};

// 50. Write a function that checks if an array is sorted in ascending order.
const isSortedAscending = arr => arr.every((num, index) => index === 0 || num >= arr[index - 1]);

// 51. Write a function that filters out negative numbers from an array.
const filterNegative = arr => arr.filter(num => num >= 0);

// 52. Write a function that calculates the square root of a number.
const squareRoot = num => Math.sqrt(num);

// 53. Write a function that finds the median of an array of numbers.
const median = arr => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);
  return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
};

// 54. Write a function that capitalizes the first letter of each word in a sentence.
const capitalizeFirstLetter = sentence => sentence.replace(/\b\w/g, char => char.toUpperCase());

// 55. Write a function that checks if a given year is a leap year.
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// 56. Write a function that finds the intersection of two arrays.
const intersection = (arr1, arr2) => arr1.filter(num => arr2.includes(num));

// 57. Write a function that checks if a number is prime.
const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// 58. Write a function that returns the power of a number (base, exponent).
const power = (base, exponent) => base ** exponent;

// 59. Write a function that calculates the area of a rectangle.
const calculateArea = (length, width) => length * width;

// 60. Write a function that calculates the perimeter of a rectangle.
const calculatePerimeter = (length, width) => 2 * (length + width);

// 61. Write a function that checks if a given string contains only digits.
const containsOnlyDigits = str => /^\d+$/.test(str);

// 62. Write a function that counts the number of words in a sentence.
const countWords = sentence => sentence.split(/\s+/).filter(word => word !== '').length;

// 63. Write a function that converts a temperature from Celsius to Fahrenheit.
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

// 64. Write a function that generates a pyramid pattern of a given height.
const generatePyramid = height => {
  for (let i = 1; i <= height; i++) {
    console.log(' '.repeat(height - i) + '*'.repeat(2 * i - 1));
  }
};

// Example usage:
console.log(allPositive([1, 2, 3])); // Output: true
console.log(allPositive([1, 2, 3,-1])); 
console.log(sumOfEven([1, 2, 3, 4, 5])); // Output: 6
console.log(toUpperCase(['hello', 'world'])); // Output: ['HELLO', 'WORLD']
console.log(randomInRange(1, 10)); // Output: Random number between 1 and 10
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(isSortedAscending([1, 2, 3])); // Output: true
console.log(filterNegative([-1, 2, -3, 4, -5])); // Output: [2, 4]
console.log(squareRoot(16)); // Output: 4
console.log(median([1, 2, 3, 4, 5])); // Output: 3
console.log(capitalizeFirstLetter('hello world')); // Output: 'Hello World'
console.log(isLeapYear(2024)); // Output: true
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
console.log(isPrime(7)); // Output: true
console.log(power(2, 3)); // Output: 8
console.log(calculateArea(5, 6)); // Output: 30
console.log(calculatePerimeter(5, 6)); // Output: 22
console.log(containsOnlyDigits('12345')); // Output: true
console.log(countWords('This is a sentence.')); // Output: 4
console.log(celsiusToFahrenheit(30)); // Output: 86
generatePyramid(5);
