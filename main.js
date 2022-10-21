const form = document.getElementById('formulario');
const lista = document.getElementById('lista');
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

tarefas.forEach( (elemento) => {
    addItem(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const txt = evento.target.elements['texto'];
    console.log(txt);
    const tarefa = {
        "tarefa": txt.value
    }

    if(txt.value == ''){
        alert('Adicione uma tarefa')
    }else{
        tarefa.id = tarefas[tarefas.length -1] ? (tarefas[tarefas.length -1]).id +1 : 0;
        addItem(tarefa);
        tarefas.push(tarefa);
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    txt.value = '';
})

function addItem (item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML += item.tarefa;

    novoItem.appendChild(deletItem(item.id));

    lista.appendChild(novoItem);

}

function deletItem(id) {
    const botaoX = document.createElement('button');
    botaoX.innerText = 'X';

    botaoX.addEventListener('click', function() {
        removeItem(this.parentNode, id)
    })

    return botaoX;
}

function removeItem(elemento, id) {
    elemento.remove();
    tarefas.splice(tarefas.findIndex(elemento => elemento.id === id) ,1);
   
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
