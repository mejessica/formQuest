document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form')
    const inputs = document.querySelectorAll(".obrigatorio")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        inputs.forEach(input => {
            const small = input.parentElement.querySelector('small');

            if (input.value.trim() === '') {
                setError(input, small, "Campo obrigatório");
            } else {
                setSuccess(input, small);
            }
        });
    }

    function setError(input, small, message) {

        // console.log("input", input)
        // console.log("small", small)
        // console.log("message", message)

        small.innerText = message;
        small.style.display = 'block';
        input.classList.remove('success');
        input.classList.add('error');
    }

    function setSuccess(input, small) {
        small.innerText = '';
        small.style.display = 'none';
        input.classList.remove('error');
        input.classList.add('success');
    }
});
