// создаём массив со словами
let words = ["программа", "макака", "прекрасный", "оладушек"];

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

// игровой цикл

while (remainingLetters > 0) {
  // показываем состояние игры
  alert(answerArray.join(""));

  // запрашиваем вариант ответа
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");

  if (guess === null) {
    // выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одну букву");
  } else {
    // обновляем состояние игры
    for (let i = 0; i < word.length; i++) {
      if (guess === word[i]) {
        answerArray[i] = guess;
        remainingLetters--;
      }
    }
  }
  // конец игрового цикла
}

// отображаем ответ и поздравляем игрока
alert(answerArray.join(""));
alert(`Отлично!!! Было загадано слово ${word}!`);
