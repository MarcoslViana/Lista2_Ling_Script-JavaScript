const inputTarefa = document.querySelector('#tarefaInput');
const listaTarefas = document.querySelector('#listaTarefas');

inputTarefa.addEventListener('keydown', function(event) {
    
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

function removerTarefa(itemLista) {
    listaTarefas.removeChild(itemLista);
}

function adicionarTarefa() {

    const tarefa = inputTarefa.value;
  
    if (tarefa !== '') {
     
      const novoItem = document.createElement('li');
  
      const spanTarefa = document.createElement('span');
      spanTarefa.textContent = tarefa;
  
      const botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'X';
      botaoRemover.addEventListener('click', function() {
        removerTarefa(novoItem);
      });
  
      novoItem.appendChild(spanTarefa);
      novoItem.appendChild(botaoRemover);
  
      listaTarefas.appendChild(novoItem);
  
      inputTarefa.value = '';
    }
}
  