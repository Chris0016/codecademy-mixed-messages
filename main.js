const { exit } = require("process");
const fs = require("fs").promises;

//Program to provide a random "fortune" message composed from using a list of words from files

async function wordsToList(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString().split("\r\n");
  } catch (error) {
    console.error(error);
    exit;
  }
}

async function getRandomMessage() {
  //low: list of words
  let getRandomWord = (low) => {
    return low[Math.floor(Math.random() * low.length)];
  };

  //let listOfNouns = await wordsToList("english-nouns.txt");
  let listOfAdjectives = await wordsToList("english-adjectives.txt");
  let listOfVerbs = await wordsToList("english-verbs.txt");
  //console.log(listOfAdjectives);

  //let noun = getRandomWord(listOfNouns);
  let adjective = getRandomWord(listOfAdjectives);
  let verb = getRandomWord(listOfVerbs);

  console.log("Your day will be " + adjective + " if you go " + verb + ".");
}

getRandomMessage();
