// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;

console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest);

// functions

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

// getAverage(person.name,67,78,89,78)

const testScores = [67, 78, 99, 100];

getAverage(person.name, ...testScores);

// Arrays

const frutas = ['mandarina', 'naranja', 'pera', 'manzana', 'uvas'];
const [primera, segunda, ...restoFrutas] = frutas;
console.log(segunda);
console.log(primera, restoFrutas);

// Objects

const animal = { genero: 'mamifero', tamano: 'pequeño', habitat: 'selva' };
const { tamano, ...restAnimal } = animal;
console.log(tamano);
console.log(tamano, restAnimal);

//function

const promedioBateo = (nombre, ...hit) => {
  console.log(nombre);
  console.log(hit);
  const promedio =
    hit.reduce((total, item) => {
      return (total += item);
    }, 0) / hit.length;
  console.log(promedio);
};

promedioBateo('edward', 10, 9, 5, 15, 8);
