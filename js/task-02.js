const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Herbs',
];
const list = document.querySelector('.list')

const li = document.createElement("li");
// list.append(li);
li.textContent = 'Potatoes';
li.classList.add('item');

const li2 = document.createElement("li");
// list.append(li2);
li2.textContent = 'Mushrooms';
li2.classList.add('item');

const li3 = document.createElement("li");
// list.append(li3);
li3.textContent = 'Garlic';
li3.classList.add('item');

const li4 = document.createElement("li");
// list.append(li4);
li4.textContent = 'Tomatos';
li4.classList.add('item');

const li5 = document.createElement("li");
// list.append(li5);
li5.textContent = 'Herbs';
li5.classList.add('item');

const li6 = document.createElement("li");
// list.append(li6);
li6.textContent = 'Herbs';
li6.classList.add('item');

list.append(li,li2,li3,li4,li5,li6);

console.log(list)