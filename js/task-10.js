function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let items = [];

const inputField = document.querySelector("#controls > input"),
      btnCreate = document.querySelector("[data-create]"),
      btnDestroy = document.querySelector("[data-destroy]"),
      containerDiv = document.querySelector("#boxes");
      
const onCreateBoxes = (evt) => {
  items = [];
  containerDiv.innerHTML = '';
  for (let i = 0; i < inputField.value; i++){
    let item = {}
    item.size = 30;
    
    item.name = items.length * 10 + 30;
    item.size += 10 * items.length;
    item.backgroundColor = getRandomHexColor();
    items.push(item);

  }
  render();
}

const onDestroy = (event) => {
  items = [];
  containerDiv.innerHTML = '';
  render();
}

const render = () => {
  items.forEach((obj, index, array) => {
    let div = document.createElement("div");
    div.style.width = `${obj.size}px`;
    div.style.height = `${obj.size}px`;
    div.style.backgroundColor = `${obj.backgroundColor}`;
    div.style.display = "inline-block"
    containerDiv.appendChild(div);
  });
}

btnCreate.addEventListener("click", onCreateBoxes);
btnDestroy.addEventListener("click", onDestroy);

