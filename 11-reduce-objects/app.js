// Reduce - Objects
// cart example
const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1,
  },
  {
    title: 'google pixel ',
    price: 499.99,
    amount: 2,
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4,
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(total)
console.log(totalItems, cartTotal);
// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1
    //   } else {
    //     total[language] = 1
    //   }
    // }
    if (language) {
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();

// nuevo ejemplo reduce object nov 2021

const fruit = [
  {
    name: 'pinapple',
    price: 3,
    cant: 1,
  },
  {
    name: 'watermelon',
    price: 5,
    cant: 2,
  },
  {
    name: 'banana',
    price: 5,
    cant: 1,
  },
  {
    name: 'apple',
    price: 4,
    cant: 1,
  },
  {
    name: 'orange',
    price: 5,
    cant: 2,
  },
];

let { totalItems2, cartTotal2 } = fruit.reduce(
  (acc, curr) => {
    const { price, cant } = curr;
    acc.totalItems2 += cant;
    acc.cartTotal2 += price * cant;
    return acc;
  },
  { totalItems2: 0, cartTotal2: 0 }
);

console.log(totalItems2, cartTotal2);
