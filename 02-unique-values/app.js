// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down
// ['all',...] - turn it back to array

/* const categories = ['all', ...new Set(menu.map((item) => item.category))];
const result = document.querySelector('.result');
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join(''); */

const categories1 = menu.map((item) => item.category); //Array con elementos repetidos.
const categoriesSet = new Set(categories1); //Objeto con elementos unicos.
const categoriesSetArray = [...categoriesSet]; //Array con elementos unicos

console.log(categories1);
console.log(categoriesSet);
console.log(categoriesSetArray);

// lo mismo en una sola linea

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

//seleccionamos la class .result del div donde queremos agregar los valores.

const result = document.querySelector('.result');

//insertamos via JS los elementos dentro del documento html.
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');
