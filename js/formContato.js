// Capturar dados do formulário de contato
const btn = document.querySelector("#submitbtn")

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")

// Verifica os campos enquanto a pessoa digita
const campos = [nome, email, assunto, mensagem]

campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
        if (campo.value.trim() !== "") {
            campo.classList.remove("erro")
        }
    })
})

btn.addEventListener("click", function (event) {
    event.preventDefault()

    if (nome.value === "" || email.value === "" || assunto.value === "" || mensagem.value === "") {
        alert("Todos os campos devem ser preenchidos.")

        campos.forEach(function (campo) {
            if (campo.value.trim() === "") {
                campo.classList.add("erro")
            }
        })

        return
    }

    console.table([nome.value, email.value, assunto.value, mensagem.value])

    btn.innerHTML = "Mensagem enviada"
})