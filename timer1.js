const args = process.argv
  .slice(2) // removes path to node and current path
  .map(arg => Number(arg)) // turns all elements into a Number
  .filter(num => !Number.isNaN(num) && num > 0) // only keeps arguments that are positive numbers
  .sort((firstToCompare, secondToCompare) => firstToCompare - secondToCompare); // sorts in ascending order


/*
  0. set delay variable globally to 1000 (ms; which is 1 second)
  1. run for loop that will iterate x many times where x is the maximum value found in args (i < max)
    - counter will start at 1

  2. for each iteration, check if the counter (i) is strictly equal to args[0]
  - if true,
  process.stdout.write('\x07');
  remove the element at [0] using args.shift()

  3. after the loop, update delay:
  -> delay += 1000; (adds a 1 second delay for the next loop)

*/

let delay = 0;
const max = Math.max(...args);


for (let i = 0; i <= max; i++) {
  setTimeout(() => {
    if (i === args[0]) {
      process.stdout.write('\x07');
      args.shift();
    }    
  }, delay);

  delay += 1000;
}