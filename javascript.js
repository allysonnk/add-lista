document.addEventListener('DOMContentLoaded', function() {
    let lista = document.querySelector('ul'); // Seleciona a lista de tarefas
    let inputTarefa = document.getElementById('tarefa');
    let botao = document.getElementById('adicionar');

    function adicionarTarefa() {
        if (inputTarefa.value.trim() !== '') { // Verifica se o campo de entrada não está vazio
            let item = document.createElement('li'); // Cria um elemento li
            item.textContent = inputTarefa.value; // Define o conteúdo do item
            item.addEventListener('click', function() {
                item.classList.toggle('concluido'); // Alterna a classe 'concluido' quando o item é clicado
            });
            lista.appendChild(item); // Adiciona o item à lista
            inputTarefa.value = ''; // Limpa o campo de entrada
        } else {
            alert('Por favor, digite uma tarefa válida.'); // Exibe um alerta se o campo estiver vazio
        }
    }

    botao.addEventListener('click', adicionarTarefa); // Adiciona um ouvinte de eventos ao botão
});
