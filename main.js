const form = document.getElementById('formulario');
const lista = document.getElementById('lista');
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

tarefas.forEach( (elemento) => {
    addItem(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const txt = evento.target.elements['texto'];

    const tarefa = {
        "tarefa": txt.value
    }
    
    addItem(tarefa);
    tarefas.push(tarefa);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    txt.value = '';
})

function addItem (item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML += item.tarefa;

    lista.appendChild(novoItem);
}
