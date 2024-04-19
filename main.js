const form = document.getElementById('form-atv')
const nomes = []
const telefones = []

let linhas = ''

form.addEventListener('submit' , function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizatabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('tel')

    if (nomes.includes(inputNome.value)) {
        alert(`O contato com nome ${inputNome.value} já foi inserido`)
    } else {
    nomes.push(inputNome.value)
    telefones.push(parseFloat(inputTelefone.value))

    let linha = '<tr>'
    linha += `<td> ${inputNome.value}</td>`
    linha += `<td> ${inputTelefone.value}</td>`
    linha += '</tr>'

    linhas += linha
    }

    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizatabela() {
    const corpoTabela = document.querySelector('table').querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
