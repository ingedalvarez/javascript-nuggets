// MAP Method
/* const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];
// Quokka.js - Extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const names = people.map((person) => ``);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
 */

const people = [
  { name: 'Edward', age: 43, possition: 'developer' },
  { name: 'Freddy', age: 40, possition: 'developer' },
  { name: 'Patricia', age: 36, possition: 'designer' },
  { name: 'Johan', age: 46, possition: 'manager' },
  { name: 'Isabella', age: 2, possition: 'CEO' },
];

const ages1 = people.map((person) => {
  return 'hello world';
});
console.log(ages1);

/*
sobre un array map aplica el return del callback function a cada uno de los items del array
*/
const ages = people.map((person) => {
  return person.age;
});

console.log(ages);

// se pueden aplicar operaciones sobre cada uno de los items del array.
const agesPlus2 = people.map((person) => {
  return person.age + 2;
});

console.log(agesPlus2);

// en este ejemplo utilizamos map para retornar un objeto a partir de cada item del array.
const newPeople = people.map((item) => {
  return {
    nameUperCase: item.name.toUpperCase(),
    utilTime: 70 - item.age,
  };
});

console.log(newPeople);

const names = people.map((person) => {
  return `<h2>${person.name} : ${person.age}</h2>`;
});

const result = document.querySelector('#result');
result.innerHTML = names.join('');
