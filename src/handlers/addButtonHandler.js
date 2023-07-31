import { dom } from '../dom.js';
import { data } from '../data.js';
import createTodoItem from '../components/todoItem.js';

const addTodoList = (value) => {
    if (dom.submitBtn.innerText === 'Edit') {
        // update UI
        const editedItem = document.querySelector('.selected');
        editedItem.querySelector('.title').innerText = value;
        // Update data
        const id = Number(editedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;

        editedItem.classList.remove('selected');
        dom.submitBtn.innerText = 'Submit';
        dom.input.value = '';
    } else {
        // add to data
        if (value === '') {
            dom.error.innerText = 'Please enter something';
            dom.error.classList.add('error1');
            return;
        }

        const newItem = {
            id: data.id++,
            text: value,
        };
        data.items.push(newItem);

        const newItemDom = createTodoItem(newItem);
        dom.itemsList.insertBefore(newItemDom, dom.itemsList.firstChild);
        dom.input.value = '';
    }
};

export default addTodoList;