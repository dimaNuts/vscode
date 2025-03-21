// функция конструктор
let Car = function (x, y) {
  this.x = x;
  this.y = y;
  this.speed = 5;
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
  let carHtml = '<img src="src/carJaguar.png" width="250"  height="250">';
  this.carElement = $(carHtml);

  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y,
  });

  $("body").append(this.carElement);
};

// move
Car.prototype.moveRight = function moveRight() {
  this.x += this.speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function moveLeft() {
  this.x -= this.speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveUP = function moveUp() {
  this.y -= this.speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveDown = function moveDown() {
  this.y += this.speed;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let jaguar = new Car(10, 20);
let jaguarPlus = new Car(300, 200);
