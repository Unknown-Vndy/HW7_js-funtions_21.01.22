console.group('task 0');
const checkAges = [20, 4, 88];
for (let age of checkAges) {
   console.log(isWorkingAgePerson(age));
}
console.groupEnd();


console.group('task 1');
const checkNumber = +prompt('enter a number to check is it a prime number');
console.log(isPrimeNumber(checkNumber));
console.groupEnd();

console.group('task 2');
const n1 = +prompt('enter first number for checking multiplicity with second number'), n2 = +prompt('enter second number');
const checkMultiplicity = (num1, num2) => num1 % num2 === 0;
console.log(checkMultiplicity(n1, n2));
console.groupEnd();

console.group('task 3');
const a = +prompt('enter first side of triangle to check if triangle possible'), b = +prompt('enter second side of triangle'), c = +prompt('enter third side of triangle');
const checkIfTrianglePossible = (a, b, c) => (a + b > c && a + c > b && b + c > a); 
console.log(checkIfTrianglePossible(a, b, c));
console.groupEnd();

console.group('task 4');
const choice = prompt('which square would you like to know: 1 - Rectangle; 2 - Paralelipiped');
if (choice === '1') {
   console.log(`Rectangle square is ${squareRectangle(+prompt('enter rectangle length'), +prompt('enter rectangle width'))}`);
} else if (choice === '2') {
   console.log(`Paralelipiped square is ${squareParalelipiped(+prompt('enter Paralelipiped length'), +prompt('enter Paralelipiped width'), +prompt('enter Paralelipiped heigth'))}`);
} else {
   console.log('incorrect data');
}
console.groupEnd();

function isWorkingAgePerson(age) {
   return (age >= 16 && age <= 65);
}

function isPrimeNumber(number) {
   if (number <= 1) {
      return false;
   }
   for (let i = 2; i < number; i++){
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}

function squareRectangle(length, width) {
   return length * width;
}

function squareParalelipiped(length, width, heigth) {
   return 2 * (length * width + length * heigth + width * heigth);
}