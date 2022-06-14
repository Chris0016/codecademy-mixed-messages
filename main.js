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
  //console.log(listOfAdjectives);

  let action = listOfNouns[Math.floor(Math.random() * listOfNouns.length)];
  let dayDescription =
    listOfAdjectives[Math.floor(Math.random() * listOfAdjectives.length)];

  console.log("Your day will be " + dayDescription + " if you " + action + ".");
}

run();
