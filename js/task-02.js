const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//1
// var list = document.getElementById("ingredients");
// var makeList = list.cloneNode(true);

// ingredients.forEach(ingredient => {
//   var entry = document.createElement("li");
//   entry.textContent = ingredient;
//   entry.classList.add("item");
//   makeList.appendChild(entry);
// })

// list.parentNode.replaceChild(makeList, list);

//2
const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientsItem = ingredient => {
  const entry = document.createElement('li');
  entry.textContent = ingredient;
  entry.classList.add('item');
  return entry;
};

const ingredientsItem = ingredients.map(makeIngredientsItem);
ingredientsListEl.append(...ingredientsItem);