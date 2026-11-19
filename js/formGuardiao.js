// Capturar dados do formulário do guardião
const btn = document.querySelector("#submitbtn")

const nome = document.querySelector("#nome")
const telefone = document.querySelector("#telefone")
const logradouro = document.querySelector("#logradouro")
const numero = document.querySelector("#numero")

// Verifica os campos enquanto a pessoa digita
const campos = [nome, telefone, logradouro, numero]

campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
        if (campo.value.trim() !== "") {
            campo.classList.remove("erro")
        }
    })
})

btn.addEventListener("click", function (event) {
    event.preventDefault()

    if (nome.value === "" || telefone.value === "" || logradouro.value === "" || numero.value === "") {
        alert("Todos os campos devem ser preenchidos.")

        campos.forEach(function (campo) {
            if (campo.value.trim() === "") {
                campo.classList.add("erro")
            }
        })

        return
    }

    console.table([nome.value, telefone.value, logradouro.value, numero.value])

    btn.innerHTML = "Cadastro enviado"
})