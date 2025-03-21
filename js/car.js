/*
let dog = {
	name: "Оладушек",
	legs: 4,
	isAwesome: true,
  };
  
  // add method
  dog.bark = function () {
	console.log(`Гав!...гав!гав! Меня зовут ${this.name}!`);
  };
  
  let speak = function () {
	console.log(`${this.sound}! My name is ${this.name}!`);
  };
  
  let cat = {
	name: "Варежка",
	sound: "Мяу",
	speak: speak,
  };
  
  dog.speak = speak;
*/
// функция конструктор
let Car = function (x, y) {
  this.x = x;
  this.y = y;
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
  this.x += 5;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveLeft = function moveLeft() {
  this.x -= 5;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveUP = function moveUp() {
  this.y -= 5;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

Car.prototype.moveDown = function moveDown() {
  this.y += 5;

  this.carElement.css({
    left: this.x,
    top: this.y,
  });
};

let jaguar = new Car(10, 20);
jaguar.draw();
let jaguarPlus = new Car(300, 200);
