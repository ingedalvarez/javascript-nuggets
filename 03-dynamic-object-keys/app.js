// const person = ['hello', 'great'];

// const testPerson = person.map(function (item) {
//   console.log(item);
// });

// const newPerson = person.map(function (item) {
//   if (item === 'hello') {
//     return item.toUpperCase();
//   }
//   return item;
// });
// console.log(newPerson);

//dot notation
const person = {
  name: 'john',
};
console.log(person.name);
console.log(person['name']);
console.log(person.age);
person.age = 25;
console.log(person);

//square brackket notation

const items = {
  'featured-itmes': ['item1', 'item2', 'item3'],
};

console.log(items['featured-itmes']);
console.log(person['name']);

let appState = 'loading';
appState = 'error';
const app = {
  [appState]: true,
};
console.log(app);

const keyName = 'computer';
app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'Euripides');
console.log(state);
