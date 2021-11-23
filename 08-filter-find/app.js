// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
// filter
const youngPeople = people.filter((person) => {
  // if (person.age < 30) {
  //   return person;
  // }
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);
// no match
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);
// find
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);
// multiple matches
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === 'anna');
console.log(anna);

console.log(peter.position);
console.log(anna[0].position);

// ======= new example =======

const employee = [
  {
    name: 'Bevis Martin',
    country: 'Brazil',
    phone: '1-131-967-4145',
    age: 49,
    language: 'english',
  },
  {
    name: 'Kyra Murray',
    country: 'Germany',
    phone: '1-885-776-7447',
    age: 37,
    language: 'spanish',
  },
  {
    name: 'Shad Suarez',
    country: 'Chile',
    phone: '(321) 841-2862',
    age: 38,
    language: 'english',
  },
  {
    name: 'Salvador Wilkinson',
    country: 'Mexico',
    phone: '1-823-125-0294',
    age: 25,
    language: 'spanish',
  },
  {
    name: 'Mufutau Crawford',
    country: 'Canada',
    phone: '1-445-701-4111',
    age: 19,
    language: 'spanish',
  },
];

const latino = employee.filter((person) => {
  return person.language === 'spanish';
});

console.log(latino);
console.log(latino.length);

const mexican = employee.find((person) => {
  return person.country === 'Mexico';
});

console.log(mexican.name);

const olders = employee.filter((person) => {
  return person.age >= 37;
});

console.log(olders);
console.log(olders.lengthto);
