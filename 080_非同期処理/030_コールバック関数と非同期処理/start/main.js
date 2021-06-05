// Result -> fn a done-> task1 done -> fn b done
function a() {
  setTimeout(function task1() {
    console.log('task1 done');
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b);

//  Result : fn a done -> fn b done  -> task1 done
// b();
// function a() {
//   setTimeout(function task1() {
//     console.log('task1 done');
//   });

//   console.log('fn a done');
// }

// function b() {
//   console.log('fn b done');
// }

// a();

// b();
