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

  // faster move heading & total click
  let total = 0;
  let stopID;
  let time = 50;
  // start movie heading
  let start = (time) => {
    stopID = setInterval(moveHeading, time);
  };
  // stop heading
  let stop = (stopID) => {
    clearInterval(stopID);
  };

  // start game
  start(time);
  $("h1").click(() => {
    stop(stopID);
    // fast move
    time -= 15;
    start(time);
    // show total click on heading
    $("h2")
      .text(`Try stop! Click on face! Total click: ${(total += 1)}`)
      .css("color", "blue");
    $("h1").text(`(O.O)`).css("color", "red");

    // end play
    if (total > 7) {
      stop(stopID);
      $("h2").text("You win!!!").css("color", "orange");
      $("h1").text(`(*.*)`).css("color", "grey");
    }
  });
})();
