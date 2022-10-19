const form = document.getElementById('formulario');
const lista = document.getElementById('lista');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const txt = evento.target.elements['texto'];
    
    addItem(txt);

    txt.value = '';
})

function addItem (item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML = item.value;

    lista.appendChild(novoItem);
    console.log(novoItem);
}
