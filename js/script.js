//test jQuery
/*
if (window.jQuery) {
  console.log(jQuery.fn.jquery);
}
  */

let getRandomNum = (size) => {
  return Math.floor(Math.random() * size);
};

// test
// console.log(getRandomNum(600));

// get distance from click(event) to treasure(target)
let getDistance = (event, target) => {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};
// test
/*
let targetTest = { x: 530, y: 220 };
 console.log(targetTest.x);
console.log(targetTest.y);

$("#map").click((event) => {
  let testDistance = getDistance(event, targetTest);
  console.log(testDistance);
});
*/
// hint for distance
let getDistanceHint = (distance) => {
  if (distance < 10) {
    return "Обожжешься!";
  } else if (distance < 20) {
    return "Очень горячо";
  } else if (distance < 40) {
    return "Горячо";
  } else if (distance < 80) {
    return "Тепло";
  } else if (distance < 160) {
    return "Холодно";
  } else if (distance < 320) {
    return "Очень холодно";
  } else {
    return "Замерзнешь!";
  }
};

// create variable
let width = 600;
let height = 400;
let clicks = 0;

// random possition treasure
let target = {
  x: getRandomNum(width),
  y: getRandomNum(height),
};
console.log(target);
// add img counter clicks for find treasure
$("#map").click((event) => {
  clicks++;

  // get distance from possition click to treasure
  let distance = getDistance(event, target);

  // get hint
  let hint = getDistanceHint(distance);

  // show hint
  $("#distance").text(hint);

  // check close by treasure
  if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + clicks);
  }
});
