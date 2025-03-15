// move heading for click
/* (function () {
  $("html").click((event) => {
    $("h1").offset({
      left: event.pageX,
      top: event.pageY,
    });
  });
})();
*/

// move heading down -> right-> up -> left
(function () {
  let offSetHeadingY = 0;
  let offSetHeadingX = 0;

  let moveHeading = () => {
    $("h1").offset({
      top: offSetHeadingY,
      left: offSetHeadingX,
    });

    if (offSetHeadingY < 200 && offSetHeadingX === 0) {
      // y = 199, x = 0
      offSetHeadingY++; // y = 200
      // console.log(offSetHeadingY);
    } else if (offSetHeadingX < 200 && offSetHeadingY === 200) {
      // y = 200, x = 199
      offSetHeadingX++; // x = 200
      // console.log(offSetHeadingX);
    } else if (offSetHeadingY > 0 && offSetHeadingX === 200) {
      // y = 200, x = 200
      offSetHeadingY--; // y = 0
      // console.log(offSetHeadingY);
    } else if (offSetHeadingY === 0 && offSetHeadingX > 0) {
      //
      offSetHeadingX--;
    }
  };

  let stopID = setInterval(moveHeading, 30);

  // stop move
  let stop = () => {
    clearInterval(stopID);
  };
  $("h1").click(stop);
})();
