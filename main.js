const { read } = require("fs");
const { exit } = require("process");

const fs = require("fs").promises;

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    return data.toString().split("\r\n");
  } catch (error) {
    console.error(error);
    exit;
  }
}

async function run() {
  let listOfNouns = await readFile("english-nouns.txt");
  let listOfAdjectives = await readFile("english-adjectives.txt");
  let listOfVerbs = await readFile("english-verbs.txt");
  //console.log(listOfAdjectives);

  let noun = getRandomWord(listOfNouns);
  let adjective = getRandomWord(listOfAdjectives);
  let verb = getRandomWord(listOfVerbs);

  function getRandomWord(low) {
    return low[Math.floor(Math.random() * low.length)];
  }
  console.log("Your day will be " + adjective + " if you go " + verb + ".");
}

run();
