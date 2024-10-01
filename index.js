/* String Manipulation Functions*/

/*Reverse a String: Write a function that reverses a given string*/
function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  console.log(strRev);
}
reverseString("Lydia");

/*Count Characters: Create a function that counts the number of characters in a string*/
function countchar(noun) {
  console.log(noun.length);
}
countchar("lydia");

/*Capitalize Words*/


function capitalizeWords(string) {
    return string.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }
  const sentence = 'karim is the best teacher'
console.log(capitalizeWords(sentence));



/*Array Function*/


/*Find Maximum and Minimum*/
function Maximum(nmbr) {
    return Math.max(...nmbr);
}

function Minimum(nmbr) {
    return Math.min(...nmbr);
}
const num = [4, 25, 5, 17, 3];
console.log("Max number is :", Maximum(num)); 

console.log("Min number is :", Minimum(num));

/*Sum of Array*/
function Sum (x) {
    return x.reduce((number1, number2) => number1 + number2, 0);
}


const numbers = [7, 12, 8, 3, 15];
console.log("Sum of the array :", Sum(numbers)); // 


/*Filter Array*/
function Filter(y , condition) {
    return y.filter(condition);
}


const numera = [15, 2, 32, 9, 54, 7];
const Numbers = Filter(numera, nume => nume % 2 === 0);

console.log("Even Numbers are:", Numbers);



/*Mathematical Functions*/

/*Factorial*/
function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1; 
    return n * factorial(n - 1); 
}

console.log("Factorial of 6:", factorial(6)); 


/*Prime Number Check*/
function Prime(z) {
    if (z <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(z); i++) {
        if (z % i === 0) return false; 
    }
    return true; 
}


console.log("Is 6 prime?", Prime(6)); 
console.log("Is 67 prime?", Prime(67)); 

/*Fibonacci Sequence*/
function fibonacci(h) {
    const sequence = [];
    for (let i = 0; i < h; i++) {
        if (i === 0) {
            sequence.push(0); 
        } else if (i === 1) {
            sequence.push(1); 
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]); 
        }
    }
    return sequence;
}


console.log("Fibonacci sequence up to 8 terms:", fibonacci(8)); 
