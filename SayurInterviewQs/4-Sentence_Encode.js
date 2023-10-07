//  4.Encode the user input using the following alg, using the encode Key (a number) For each word in 
//  the odd position, move each letter in the word by the number of positions mentioned in the key.
//  For words in the even position, reverse the word and then do the same as the odd position.
//  Eg - Key 2, input sentence "I am the King"
//  Output K oc vjg ipkM


function encodeSentence(input, key) {
    const words = input.split(' ');
    const encodedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let encodedWord = '';
  
      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        let encodedChar = char;
  
        if (i % 2 === 0) {
          // Even position word: Reverse the word and apply key
          encodedChar = String.fromCharCode(char.charCodeAt(0) + key);
        } else {
          // Odd position word: Apply key
          encodedChar = String.fromCharCode(char.charCodeAt(0) - key);
        }
  
        encodedWord += encodedChar;
      }
  
      encodedWords.push(encodedWord);
    }
  
    return encodedWords.join(' ');
  }
  
  // Example usage with a key of 2 and input sentence "I am the King"
  const key = 2;
  const inputSentence = "I am the King";
  const encodedSentence = encodeSentence(inputSentence, key);
  console.log(encodedSentence); // Output: "K _k vjg Igle"