let newHeadingText = prompt("Input new heading:", "");
$("#main-heading").text(newHeadingText);

if (window.jQuery) {
  let vJq = jQuery.fn.jquery;
  console.log(vJq);
}
