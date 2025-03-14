// change heading
let newHeadingText = prompt("Input new heading:", "");
$("#main-heading").text(newHeadingText);

// look version jQuery
if (window.jQuery) {
  let vJq = jQuery.fn.jquery;
  console.log(vJq);
}

// поместить в конец страницы новый элемент p
$("body").append("<p> It is new paragraph</p>");

// несколько
for (let i = 0; i < 3; i++) {
  let hobby = prompt("Input you favorite hobby", "");
  $("body").append("<p>" + hobby + "</p>");
}

// fade out
$("h1").fadeOut(3000);

// fade in
$("h1").text("Этот текст скоро исчезнет/ появится").fadeOut(3000).fadeIn(2000);

// slide up / slide down

$("h1")
  .text("Этот текст скоро исчезнет")
  .fadeOut(3000)
  .slideUp(1000)
  .slideDown(2000);

for (let i = 0; i < 3; i++) {
  $("h2").fadeOut(1000);
  $("h2").fadeIn(1000);
}

$("h2").hide(1000).show(1000);
