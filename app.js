function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  let counter = 1;

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let newLi = document.createElement('li');
    newLi.classList.add('mdl-list__item');

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('mdl-checkbox__input');
    checkbox.id = 'checkbox' + counter;

    let title = newToDoText.value;
    let titleContainer = document.createElement('span');
    titleContainer.textContent = title;
    titleContainer.classList.add('mdl-checkbox__label');

    let labelContainer = document.createElement('label');
    labelContainer.classList.add('mdl-checkbox', 'mdl-js-checkbox', 'mdl-js-ripple-effect');
    labelContainer.setAttribute('for', 'checkbox' + counter);
    labelContainer.appendChild(checkbox);
    labelContainer.appendChild(titleContainer);


    let deleteButton = document.createElement('button');
    deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-js-ripple-effect', 'mdl-button--raised', 'mdl-button--icon');
    let buttonIcon = document.createElement('i');
    buttonIcon.style = "pointer-events: none;";
    buttonIcon.classList.add('material-icons');
    buttonIcon.textContent = "remove";
    deleteButton.appendChild(buttonIcon);
    deleteButton.addEventListener('click', event => {
      console.log(event.target);
      onDelete(event.target);
    });

    let primaryContent = document.createElement('div');
    primaryContent.classList.add('mdl-list__item-primary-content');
    primaryContent.appendChild(labelContainer);

    let secondaryContent = document.createElement('div');
    secondaryContent.classList.add('mdl-list__item-secondary-content');
    secondaryContent.appendChild(deleteButton);

    newLi.appendChild(primaryContent);
    newLi.appendChild(secondaryContent);

    toDoList.appendChild(newLi);

    newToDoText.value = '';

    counter++;
    componentHandler.upgradeDom();
  });
}

function onDelete(target) {
  let todoItem = target.parentNode.parentNode.parentNode;
  console.log('todoItem: ', todoItem);
  toDoList.removeChild(todoItem);
  counter--;
}

window.onload = function() {
   onReady();
};
