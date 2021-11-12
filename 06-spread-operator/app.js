// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

//reference
// const newFriends = friends;
// copy
newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(newFriends);
console.log(friends);

// ES2018 - ES8

const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, city: 'chicago', name: 'peter' };
console.log(newPerson);

const hola = 'hola mundo';
const letters1 = [...hola];
console.log(letters1);

const hombres = ['Edward', 'Johan', 'Freddy'];
const mujeres = ['Ana Patricia', 'Yolecy', 'Margarita'];
const madre = 'Ana Isabel';

const familia = [...hombres, ...mujeres, madre];
console.log(familia);

/*
si queremos hacer una copia de un objeto y luego modificar la copia sin afectar
el objeto original utilizamos spread operator.
*/

//si lo hacemos así se modifica el array original.
const frase = ['A', 'B', 'C'];
const frase2 = frase;
frase2[0] = 'Elefante';
console.log(frase2);
console.log(frase);

// si usamos spread operator no se modifica el array original.

const frase3 = ['A', 'B', 'C'];
const frase4 = [...frase3];
frase4[0] = 'Vaca';
console.log(frase4);
console.log(frase3);

//con objetos pasa lo mismo
const person1 = { name: 'edward', job: 'house keeper' };
const newPerson1 = { ...person1 };
console.log(person1);
console.log(newPerson1);

const newPerson2 = { ...person1, name: 'Isabella', city: 'popayan' };
console.log(newPerson2);
