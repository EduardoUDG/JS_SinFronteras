const todos = [];

window.onload = () => {
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        
        /* 
        .map nos ayuda a 
        iterar arreglos sin que le tengamos que indicar 
        desde que posicion iniciar y cuando terminar
        */
        const todoList = document.getElementById('todo-list');
        const todosTemplate =  todos.map(t => '<li>' + t + '</li>');
        /* 
        Una forma de traducir la funcion anterior
        seria. A todos los elementos concatenales la etiqueta <li>
        al comienzo y al final
        */
        todoList.innerHTML = todosTemplate.join('');
        /* 
            .join tomar toma todos los elementos del arreglo
            y los junta mediante lo que nosotros le indiquemos
            en este caso un string vacio
        */
    }
}