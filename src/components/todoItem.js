// Imports
import { data } from '../data.js';
import { dom } from '../dom.js';
import editItemList from '../handlers/editButtonHandler.js';
import deleteItemList from '../handlers/deleteButtonHandler.js';

function createTodoItem(itemData) {
    // create div
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');
    todoContainer.id = itemData.id;

    // create title
    const todoTitle = document.createElement('p');
    todoTitle.innerText = itemData.text;
    todoTitle.classList.add('title');

    // create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // create edit button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    const editImage = document.createElement('img');
    editImage.src = './assets/edit-button.png';
    editBtn.appendChild(editImage);

    // add event
    editBtn.addEventListener('click', () => {
        dom.submitBtn.innerText = 'Edit';
        todoContainer.classList.add('selected');
        editItemList(itemData.id);
    });
    // create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    const deleteImage = document.createElement('img')
    deleteImage.src = './assets/delete-button.png';
    deleteBtn.appendChild(deleteImage);
    // add event
    deleteBtn.addEventListener('click', () => {
        deleteItemList(itemData.id);
    });

    // append
    btnContainer.append(editBtn, deleteBtn);
    todoContainer.append(todoTitle, btnContainer);

    return todoContainer;
}

export default createTodoItem;