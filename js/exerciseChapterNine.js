// Создаём массив с именами нескольких друзей
let myFriends = ["Олег", "Нина", "Платон", "Ольга", "Саша", "Ирина"];

// создаём для каждого имени по одному элементу p

for (let i = 0, max = myFriends.length; i < max; i++) {
  $("body").append(`<p>${myFriends[i]}</p>`);
}

$("p").append(" the best!!!");

$("h1").text("My friends!").hide(2000).slideDown(2000);

// мигающий заголовок

for (let i = 1; i <= 5; i++) {
  $("h1")
    .fadeOut(i * 1000)
    .fadeIn(i * 1000);
}

// отложенная анимация

$("h2").delay(5000).fadeOut(1000).fadeIn(2000);

// fade to
$("h2").fadeTo(10000, 0.1);
