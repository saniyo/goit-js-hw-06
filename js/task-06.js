const textInput = document.querySelector("#validation-input");
const verifyInput = Number(textInput.getAttribute('data-length'));

const replaceStyle = (remove, add, obj) => {
    obj.classList.remove(remove);
    obj.classList.add(add);
}

const onInputBlur = (event) => {
    event.currentTarget.value.length === verifyInput
        ? replaceStyle('invalid', 'valid', textInput)
        : replaceStyle('valid', 'invalid', textInput);
}

textInput.addEventListener("blur", onInputBlur);