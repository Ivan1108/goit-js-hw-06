const listCateg = document.getElementById('categories');
const countCateg = [...listCateg.children];
console.log("Number of categories:", countCateg.length);

const getCateg = document.getElementById('Animals');
console.log("Category: Animals");
const countAnimalsEl = [...getCateg.children];
console.log("Elements", countAnimalsEl.length);


const getCateg1 = document.getElementById('Products');
console.log("Category: Products");
const countAnimalsEl1 = [...getCateg1.children];
console.log("Elements", countAnimalsEl1.length);

const getCateg2 = document.getElementById('Technologies');
console.log("Category: Technologies");
const countAnimalsEl2 = [...getCateg2.children];
console.log("Elements", countAnimalsEl2.length);