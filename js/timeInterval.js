let timeUp = function () {
  alert("Time up!!!");
};

let idTimeUP = setTimeout(timeUp, 1000);

let printMessage = function () {
  let counter = 1;
  console.info(`You look at console ${counter} seconds!`);
  counter++;
};

let intevalId = setInterval(printMessage, 1000);

let stopPrint = () => {
  clearInterval(intevalId);
};

setTimeout(stopPrint, 8000);
