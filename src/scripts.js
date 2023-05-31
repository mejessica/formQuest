const form = document.getElementById('form')
const small = document.querySelector('small')
const campoObrigatorio = document.querySelectorAll("form-control")
const inputs = document.querySelectorAll("input, textarea")

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    campoObrigatorio.forEach(indice => {
        if (inputs.value === "") {
            setError(indice, "campo obrigatório");
        } else {
            setSuccess(indice)
        }
    });
}

function setError(indice, message) {
    campoObrigatorio[indice].classList.add('.error')
    small.innerText = message;
}

function setSuccess(indice) {
    campoObrigatorio[indice].classList.add('.success')
}







