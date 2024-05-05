form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    verificarCadastro();    
    
    adicionarContato();
}); 

function verificarCadastro() {

    
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    
    if (nome === '' || telefone === '') {
        alert('Por favor preenche todos os campos')
    } else {
        
    let tabela = document.getElementById("tabela-contatos");
    let linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
            let celulaNome = linhas[i].cells[0];
            let nomeExistente = celulaNome.textContent.trim();

            let regex = new RegExp("^" + nome + "$", "i");
            if (regex.test(nomeExistente)) {
                alert("Este nome já está cadastrado na agenda.");
                return;
            }
        }
        adicionarContato(nome, telefone);
    }
}

function adicionarContato(nome, telefone) {
    let tabela = document.getElementById("tabela-contatos");
    let novaLinha = tabela.insertRow(-1);

    let celulaNome = novaLinha.insertCell(0);
    let celulaTelefone = novaLinha.insertCell(1); 

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}