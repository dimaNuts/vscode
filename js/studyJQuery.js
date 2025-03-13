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
