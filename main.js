window.addEventListener('DOMContentLoaded', (e) => {
    const form = window.document.getElementById('form-vero')
    const input = window.document.getElementById('fecha')

    const fecha = 25;

    form.addEventListener('submit', (e) => {
        if (input.value) {
            if (Number(input.value) === Number(fecha)) {
                alert('Espero que te gusten estas flores amor 💘')
                window.location.href = './FloresVero/index.html'
            } else {
                alert("Que bolas no recuerdas :'C");
                return false;
            }
        } else {
            alert('Rellena el campo bombón 😘')
        }

        e.preventDefault()
    })


    e.preventDefault()
})