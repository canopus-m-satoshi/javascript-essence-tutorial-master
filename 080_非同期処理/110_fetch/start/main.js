// fetch('./users.json')
//   .then(function (response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function (json) {
//     console.log(json);
//   });

async function fetchUsers() {
  const response = await fetch('./users.json');
  const json = await response.json();

  console.log(json);
}

fetchUsers();
