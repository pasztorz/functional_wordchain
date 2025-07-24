/* eslint-disable max-len */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const playerName = prompt('This is the Wordchain game, please give me your name before we get started! ').toUpperCase();

let lastChar = '';
let startWord = '';
let nextWord = '';

function startGame() {
  console.log(`Welcome ${playerName}! The rules of this game are simple:
    1. You give me a word and 
    2. then you have to give an other one starting with the last letter of the previous word.
    3. Each word have to be at least 3 characters long and you cannot play using the definite article "the".
    4. If you type quit any time, the game stops. Avoid using this word if you enjoy and want to get on with the game!
    Let's get started, have fun!`);
  startWord = prompt(`Give me the first word, dear "${playerName}", please! `).toUpperCase();
  //console.log(welcome);

  while (startWord.length < 3 || startWord === 'THE' || startWord === '   ') {
    console.log('a ', startWord);
    startWord = prompt('Wrong word! Check the rules and try again with a new one! ').toUpperCase();
    console.log('b ', startWord);
  }

  /*if (startWord === 'QUIT') {
    console.log('THANK YOU FOR PLAYING WITH ME, SEE YOU NEXT TIME!');
    process.exit();
  }*/

  if (startWord !== '' && startWord !== ' ') {
    console.log('c ', startWord);
    const supportIndex = startWord.length - 1;
    console.log('d ', supportIndex);
    lastChar = startWord.at(supportIndex);
    console.log('e ', lastChar);
  }
  return lastChar;
}

/*function storeLastCharacter() {
  const word = startGame();
  const supportIndex = word.length - 1;
  //console.log('d ', supportIndex);
  const lastChar = word.at(supportIndex);
  console.log('e ', lastChar);
  return lastChar;
}*/
//storeLastCharacter();
//console.log(storeLastCharacter());

function askNextWord() {
  //lastChar = '';
  //console.log('0 ', lastChar);
  //const lastChar = '';
  console.log('f ', lastChar);
  nextWord = prompt(`Now please provide a new word starting with the letter "${lastChar}"! `).toLocaleUpperCase();
  let firstChar = nextWord[0];
  console.log('g ', nextWord);
  console.log('h ', firstChar);

  while ((firstChar !== lastChar && nextWord.length < 3) || nextWord === 'THE' || nextWord === '   ') {
    nextWord = prompt('Wrong word! Check the rules and try again with a new one! ').toUpperCase();
    firstChar = nextWord[0];
    console.log('i ', nextWord);
    console.log('j ', firstChar);
  }

  if (nextWord !== '' && nextWord !== ' ') {
    console.log('k ', nextWord);
    console.log('l ', firstChar);
    const supportIndex = nextWord.length - 1;
    console.log('m ', supportIndex);
    lastChar = nextWord.at(supportIndex);
    console.log('n ', lastChar);
  }
  return lastChar;
}
//askNextWord();
//console.log(askNextWord());

function main() {
  lastChar = startGame();
  if (startWord === 'QUIT') {
    console.log('THANK YOU FOR PLAYING WITH ME, SEE YOU NEXT TIME!');
    process.exit();
  }
  console.log('o ', lastChar);

  lastChar = askNextWord();
  console.log('p ', lastChar);

  while (startWord !== 'QUIT' && nextWord !== 'QUIT') {
    askNextWord();
  }
  if (nextWord === 'QUIT') {
    console.log('THANK YOU FOR PLAYING WITH ME, SEE YOU NEXT TIME!');
    process.exit();
  }
}
main();
