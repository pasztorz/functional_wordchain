/* eslint-disable max-len */
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const playerName = prompt('This is the Wordchain game, please give me your name before we get started! ');

function startGame() {
  console.log(`Welcome ${playerName}! The rules of this game are simple:
    1. You give me a word and 
    2. the next player have to give an other one starting with the last letter of the previous word.
    3. Each word have to be at least 3 characters long and you cannot play using the definite article "the".`);
  let welcome = prompt(`So give me the first word ${playerName}, please! `).toUpperCase();
  console.log(welcome);

  while (welcome.length < 3 || welcome === 'THE' || welcome === '   ') {
    console.log('a ', welcome);
    welcome = prompt('Wrong word! Check the rules and try again with a new one! ').toUpperCase();
    console.log('b ', welcome);
  }

  if (welcome !== '' && welcome !== ' ') {
    console.log('c ', welcome);
    //const supportIndex = welcome.length - 1;
    //console.log('d ', supportIndex);
    //const lastChar = welcome.at(supportIndex);
    //console.log('e ', lastChar);
    return welcome;
  }
}

function storeLastCharacter() {
  const word = startGame();
  const supportIndex = word.length - 1;
  //console.log('d ', supportIndex);
  const lastChar = word.at(supportIndex);
  //console.log('e ', lastChar);
  return lastChar;
}
//storeLastCharacter();
//console.log(storeLastCharacter());

function askNextWord(/*lastChar*/) {
  //lastChar = startGame();
  //console.log('0 ', lastChar);
  let lastChar = storeLastCharacter();
  let nextWord = prompt(`Now please provide a new word starting with the letter "${lastChar}"! `).toLocaleUpperCase();
  let firstChar = nextWord[0];
  //console.log('a ', nextWord);
  console.log('b ', firstChar);

  while ((firstChar !== lastChar && nextWord.length < 3) || nextWord === 'THE' || nextWord === '   ') {
    nextWord = prompt('Wrong word! Check the rules and try again with a new one! ').toUpperCase();
    firstChar = nextWord[0];
    console.log('c ', nextWord);
    console.log('d ', firstChar);
  }

  if (nextWord !== '' && nextWord !== ' ') {
    console.log('e ', nextWord);
    console.log('f ', firstChar);
    //return nextWord;
  }
}
askNextWord();
//console.log(askNextWord());

/*function main() {
  startGame();
  //const lastChar = storeLastCharacter();
  askNextWord();
}
main();*/
