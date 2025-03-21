// функция конструктор
let Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.draw();
};

// draw car
let drawCar = function drawCar(car) {
  let carHtml = '<img src="src/carJaguar.png" width="250"  height="250">';
  let carElement = $(carHtml);

  carElement.css({
    position: "absolute",
    left: car.x,
    top: car.y,
  });

  $("body").append(carElement);
};

// drawCar(jaguar);
// drawCar(jaguarPlus);

// добавляем метод draw к прототипу Car(не забыть про this)

Car.prototype.draw = function draw() {
  let carHtml = '<img src="src/jaguarXJ.webp" width="250"  height="250">';
  this.carElement = $(carHtml);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });

  $("body").append(this.carElement);
};

// move
Car.prototype.moveRight = function moveRight(offset) {
  this.x += offset;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function moveLeft(offset) {
  this.x -= offset;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveUP = function moveUp(offset) {
  this.y -= offset;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveDown = function moveDown(offset) {
  this.y += offset;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let jaguar = new Car(10, 10);
let jaguarPlus = new Car(100, 300);

let frequencyMove = 20;
let offsetJaguar = Math.random() * 5;
let offsetJaguarPlus = Math.random() * 5;

// get id for stop moving and moving right for car
let stopId = setInterval(() => {
  jaguar.moveRight(offsetJaguar);
  jaguarPlus.moveRight(offsetJaguarPlus);
}, frequencyMove);

// time for stop
let stopTime = 3000;
setTimeout(() => {
  clearInterval(stopId);
}, stopTime);
