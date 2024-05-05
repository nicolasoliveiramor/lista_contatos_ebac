form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    verificarCadastro();    
    
}); 

function verificarCadastro() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    
    if (nome === '' || telefone === '') {
        alert('Por favor preencha todos os campos')
    } else {
        
    let tabela = document.getElementById("tabela-contatos");
    let linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
            let celulaNome = linhas[i].cells[0];
            let nomeExistente = celulaNome.textContent.trim();

            let celulaTelefone = linhas [i].cells[1];
            let telefoneExistente = celulaTelefone.textContent.trim();
            
            if (telefoneExistente === telefone){
                alert(`Este telefone ${telefone} já pertence a outro contato.`);
                return;
            }

            if (nomeExistente.toLowerCase() === nome.toLowerCase()) {
                alert(`Este contato com o nome: ${nome} já está cadastrado.`);
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