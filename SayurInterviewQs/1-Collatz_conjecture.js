// 1.Write a program for Collatz_conjecture.
// Collatz_conjecture means -  start with the input number. 
// For even number , divide by 2 (n/2)
// For odd number - 3n + 1
// apply the above for the resulting number until the answer is 1.Eg, input is 8
// output 8, 4,2, 1
// input is 9
// output 9,28,14,7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1

// Get two numbers as input. Print the number that has less number of steps to reach 1.

function collatzSteps(n) {      
    let steps  = [n];               
    while (n !== 1) {             
      if (n % 2 === 0) {            
        n = n / 2;                  
      } else {                      
        n = 3 * n + 1;              
      }
      steps.push(n);                      
    }
    return steps;
  }
  
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
  
      const steps1 = collatzSteps(num1);  
      const steps2 = collatzSteps(num2);  
  
      if (steps1.length < steps2.length) {               
        console.log(`Number ${num1} reaches 1 in fewer steps.`);
        console.log(`Collatz Sequence: ${steps1.join(', ')}`);
      } else if (steps2.length < steps1.length) {       
        console.log(`Number ${num2} reaches 1 in fewer steps.`);
        console.log(`Collatz Sequence: ${steps2.join(', ')}`);
      } else {                             
        console.log(`Both numbers reach 1 in the same number of steps.`);
        console.log(`Collatz Sequence for ${num1}: ${steps1.join(', ')}`);
        console.log(`Collatz Sequence for ${num2}: ${steps2.join(', ')}`);
      }
  
      rl.close();
    });
  });