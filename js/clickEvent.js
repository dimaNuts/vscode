// click at title to get position
(function () {
  let clickHandler = (event) => {
    console.log(`Click! x = ${event.pageX} y = ${event.pageY}`);
  };

  $("h1").click(clickHandler);
})();

// title move for mouse
(function () {
  $("html").mousemove((event) => {
    $("h1").offset({
      left: event.pageX,
      top: event.pageY,
    });
  });
})();
