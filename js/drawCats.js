// рисуем столько котиков, сколько захотим
(function () {
  let drawCats = function (howManyTimes) {
    for (let i = 1; i <= howManyTimes; i++) {
      console.log(i + "." + "=^.^=");
    }
  };

  drawCats(5);
})();
