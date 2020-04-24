/* Write a program that uses console.log to print all the numbers from 1 to 100, with three exceptions.
For numbers divisible by 3, print "Fizz" instead of the number.
For numbers divisible by 5 (and not 3), print "Buzz" instead.
For numbers that are divisible by both 3 and 5 print "FizzBuzz" insted. */

for (let number = 1; number <= 100; number++) {
    if (number % (3 * 5) === 0) {
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(number);
    }
}