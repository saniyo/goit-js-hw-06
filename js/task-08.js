const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
    event.preventDefault();

    const   formElements = event.currentTarget.elements,
            email = formElements.email,
            password = formElements.password;

    email.value === "" || password.value === ""
        ? alert("All fields have to be filled")
        : null;
    
    const formData = {
        email: email.value,
        password: password.value,
    };
    
    console.log(formData);
    event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);
