let counterValue = 0;

const refs = {
    labelCounter: document.querySelector('#value'),
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
};

refs.buttonDecrement.addEventListener('click', onButtonDecrement);
refs.buttonIncrement.addEventListener('click', onButtonIncrement);

function onButtonDecrement(event) {
    counterValue -= 1;
    refs.labelCounter.textContent = counterValue;
};

function onButtonIncrement(event) {
    counterValue += 1;
    refs.labelCounter.textContent = counterValue;
}