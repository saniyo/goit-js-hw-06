function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body"),
      btnChangeColor = document.querySelector(".change-color"),
      text = document.querySelector(".color");

const changeColor = (event) => {
      let randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
      text.textContent = randomColor;
}

btnChangeColor.addEventListener("click", changeColor);

