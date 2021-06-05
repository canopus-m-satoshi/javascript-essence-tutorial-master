new Promise(function (resolve, reject) {
  console.log('promise');

  setTimeout(function () {
    resolve('Hello!');
  }, 1000);
})
  .then(function (data) {
    console.log(data + ' then1 called');
    // throw new Error();
    return data;
  })
  .then(function (data) {
    console.log(data + ' then2 called');
  })
  .catch(function (data) {
    console.log('catch called');
  })
  .finally(function (data) {
    console.log('Finally!');
  });

console.log('global end');
