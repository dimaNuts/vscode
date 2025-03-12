// создаём массив со словами
let words = [
  "программа",
  "макака",
  "прекрасный",
  "оладушек",
  "блин",
  "колодец",
];

// выбраем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

// создаём итоговый массив
let answerArray = [];
let lenWord = word.length;
for (let i = 0; i < lenWord; i++) {
  answerArray[i] = "_";
}

// оставшиеся буквы
let remainingLetters = word.length;
// число попыток отгадать слово
let tryCount = lenWord + 2;
alert(`Число попыток отгадать слово: ${tryCount}`);

// игровой цикл
while (remainingLetters > 0) {
  // показываем состояние игры
  alert(`Количество отгаданных букв 
    ${answerArray.join("")}`);

  // запрашиваем вариант ответа
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");

  if (guess === null || tryCount === 0) {
    // выходим из игрового цикла
    alert(`Вы вышли из игры или у вас закончилось число попыток!`);
    break;
  } else if (guess.length !== 1 || !guess) {
    alert("Пожалуйста, введите одну букву");
    tryCount++;
  } else {
    // обновляем состояние игры
    for (let i = 0; i < lenWord; i++) {
      let smallLetter = guess.toLowerCase();
      if (answerArray[i] === smallLetter) {
        alert(`Такая буква уже есть !`);
        tryCount++;
        break;
      } else if (smallLetter === word[i]) {
        answerArray[i] = smallLetter;
        remainingLetters--;
      }
    }
  }
  tryCount--;
  alert(`Осталось попыток: ${tryCount}`);
  // конец игрового цикла
}

// отображаем ответ и поздравляем игрока
alert(`Ваш ответ:
  ${answerArray.join("")}`);
alert(`Отлично!!! Было загадано слово ${word}!`);
