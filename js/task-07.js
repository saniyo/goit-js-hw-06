const sliderInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const changeFontSize = (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}

 sliderInput.addEventListener('change', changeFontSize);


