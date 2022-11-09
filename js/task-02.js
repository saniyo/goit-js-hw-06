const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

var list = document.getElementById("ingredients");
var clone = list.cloneNode(true);

ingredients.forEach(ingredient => {
  var entry = document.createElement("li");
  entry.textContent = ingredient;
  entry.classList.add("item");
  clone.appendChild(entry);
})

list.parentNode.replaceChild(clone, list);


