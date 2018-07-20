function onReady() {
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) {return; }
      toDos.push({
        title: newToDoText.value,
        complete: false,
        id: id
      });
      newToDoText.value = '';
      renderTheUI();
      id++;
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const deleteButton = document.createElement('button');
      deleteButton.addEventListener('click', event => {
          toDos = toDos.filter(todo => todo.id !== toDo.id);
          renderTheUI();
      });

      newLi.textContent = toDo.title;
      newLi.appendChild(deleteButton);
      newLi.appendChild(checkbox);

      toDoList.appendChild(newLi);
    });
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
   onReady();
};
