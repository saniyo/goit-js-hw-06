let counterValue = 0;

const refs = {
    labelCounter: document.querySelector('#value'),
    btnDec: document.querySelector('[data-action="decrement"]'),
    btnInc: document.querySelector('[data-action="increment"]'),
};

refs.btnDec.addEventListener('click', onButtonDecrement);
refs.btnInc.addEventListener('click', onButtonIncrement);

function onButtonDecrement(event) {
    counterValue -= 1;
    refs.labelCounter.textContent = counterValue;
};

function onButtonIncrement(event) {
    counterValue += 1;
    refs.labelCounter.textContent = counterValue;
}