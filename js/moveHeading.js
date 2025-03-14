(function () {
  let offSet = 0;
  let moveHeading = () => {
    $("h1").offset({ left: offSet });
    offSet++;

    if (offSet > 200) {
      offSet = 0;
    }
  };

  setInterval(moveHeading, 30);
})();
