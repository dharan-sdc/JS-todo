const todoList = [];

renderTodo()


function renderTodo() {

  let todoListHTML = '';

  todoList.forEach(function (todoObject, index) {
    // const todoObject = todoList[i]
    // //const name = todoObject.name; make it destructure
    const { name } = todoObject;
    // //const dueDate = todoObject.dueDate;
    const html = `    
      <div> ${name}</div>          
      <button  class="delete-btn js-delete-btn">Finished</button>             
     `;
    todoListHTML += html;
  })

  document.querySelector('.js-div').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-btn')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodo();
      })
    })

}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo()
})


function addTodo() {
  const inputElement = document.querySelector('.js-input')
  const name = inputElement.value;

  // const dateInputElement = document.querySelector('.js-dateInput')
  // const dueDate = dateInputElement.value

  todoList.push({
    name //, dueDate
  });

  inputElement.value = '';
  //dateInputElement.value = '';


  renderTodo()
}


