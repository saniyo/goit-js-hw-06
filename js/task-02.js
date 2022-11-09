const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

var list = document.getElementById("ingredients");
var makeList = list.cloneNode(true);

ingredients.forEach(ingredient => {
  var entry = document.createElement("li");
  entry.textContent = ingredient;
  entry.classList.add("item");
  makeList.appendChild(entry);
})

list.parentNode.replaceChild(makeList, list);


