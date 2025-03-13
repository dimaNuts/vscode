// change heading
let newHeadingText = prompt("Input new heading:", "");
$("#main-heading").text(newHeadingText);

// look version jQuery
if (window.jQuery) {
  let vJq = jQuery.fn.jquery;
  console.log(vJq);
}

// поместить в конец страницы новый элемент p
