window.name = 'John';

const person = {
  name: 'Tom',
  hello: function () {
    console.log('Hello ' + this.name);
  },
};
// person.hello();

const helloTom = person.hello.bind(person);
// const helloTom = person.hello;

function fn(ref) {
  ref();
}

fn(helloTom);
