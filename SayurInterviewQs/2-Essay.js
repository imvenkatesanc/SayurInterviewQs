// 2. You are writing an essay. You don't want the any word to appear very frequently. 
// Write a program that will take your essay as input (maybe from a file) and 
// print the number of times each unique word appears in your essay.


const fs = require('fs'); 
const essay = fs.readFileSync('essay.txt', 'utf-8');

// Tokenize the essay into words (split by spaces and punctuation)
const words = essay.toLowerCase().match(/\b\w+\b/g);

// Create an object to store word frequencies
const wordFrequencies = {};

// Loop through the words and count their frequencies
words.forEach(word => {
  if (wordFrequencies[word]) {
    wordFrequencies[word]++;
  } else {
    wordFrequencies[word] = 1;
  }
});

// Print the word frequencies
for (const word in wordFrequencies) {
  console.log(`${word}: ${wordFrequencies[word]}`);
}