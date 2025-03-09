// beatiful animals
let animals = ["Cat", "Fish", "Dog", "Bird"];

let lenArray = animals.length;

for (let i = 0; i < lenArray; i++) {
  animals[i] += " - beautiful animals";
}

console.log(animals);

// generator random string
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let lenStr = alphabet.length;
// +1 чтобы длина была больше нуля
let randomLenStr = Math.floor(Math.random() * alphabet.length) + 1;
while (randomString.length < randomLenStr) {
  let randomIndexStr = Math.floor(Math.random() * lenStr);
  let randomSymbol = alphabet[randomIndexStr];
  randomString += randomSymbol;
}

console.log(randomString);

// h4ck3r sp34k

let input = "javascript is awesome!";
let output = "";
let lenInput = input.length;

let changeLetter = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
};

let array = [];

for (let i = 0; i < lenInput; i++) {
  if (
    input[i] === "a" ||
    input[i] === "e" ||
    input[i] === "i" ||
    input[i] === "o"
  ) {
    array.push(changeLetter[input[i]]);
  } else {
    array.push(input[i]);
  }
}

output = array.join("");

console.log(output);
