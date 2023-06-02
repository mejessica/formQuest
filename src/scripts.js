const form = document.getElementById('form')
const campoObrigatorio = document.querySelectorAll(".form-control")
const inputs = document.querySelectorAll("input, textarea")

form.addEventListener('submit', (e) => {

    e.preventDefault();

    checkInputs();

    console.log(inputs)

});

function checkInputs() {
    inputs.forEach(inputs => {
        if (inputs.value === '') {
            setError(inputs, "campo obrigatório");
        } else {
            setSuccess(inputs)
        }
    });
}

function setError(inputs, message) {
    const small = document.querySelector('small')
    
    small.innerText = message;
    
    inputs.classList.remove('success')
    inputs.classList.add('error')
}

function setSuccess(inputs) {
    inputs.classList.remove('error')
    inputs.classList.add('success')
}







