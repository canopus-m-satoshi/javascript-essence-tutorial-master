function sleep(val) {
  return new Promise(function (reslve) {
    setTimeout(function () {
      console.log(val++);
      reslve(val);
    }, 1000);
  });
}

sleep(0).then(function (val) {
  return sleep(val);
});
