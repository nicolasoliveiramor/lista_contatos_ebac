const form = document.getElementById('form-contato')

const imgPessoaContato = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" alt="nome do contato" />'

const imgAddContato = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" alt="numero do contato" />'

const pessoa = []
const telefone = []

const spanPessoaContato = imgPessoaContato
const spanTelefoneContato = imgAddContato

let linhas = ''

form.addEventListener('submit', function (e) {

    e.preventDefault()

    adicionaLinha()

    atulizaLista()

})

function adicionaLinha() {

    const inputNomePessoa = document.getElementById('nome-pessoa')

    const inputTelPessoa = document.getElementById('telefone-do-contato')

    if ((telefone.includes(inputTelPessoa.value)) && (pessoa.includes(inputNomePessoa.value))) {
        alert(`Este contato: ${inputNomePessoa.value} com o número: ${inputTelPessoa.value} já existe em sua lista.`)
    } else {
        telefone.push(inputTelPessoa.value)
        pessoa.push(inputNomePessoa.value)

        let linha = '<tr>'

        linha += `<td>${inputNomePessoa}</td>`
        linha += `<td>${inputTelPessoa}</td>`

        linhas += linha
    }

    inputNomePessoa.value = ''
    inputTelPessoa.value = ''

}

function adicionaLinha() {
    const corpoLista = document.querySelector('tbody')

    corpoLista.innerHTML = linhas
}

function atulizaLista() {

    document.getElementById('adiciona-pessoa').innerHTML = spanPessoaContato
    document.getElementById('adiciona-telefone').innerHTML = spanTelefoneContato
}