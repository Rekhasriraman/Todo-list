import { dom } from '../dom.js';
import { data } from '../data.js';

const deleteTodoList = (id) => {
  // Find index of item to be deleted
  const deleteIndex = data.items.findIndex(item => item.id === id);

  if (deleteIndex !== -1) {
    // remove item from the data
    data.items.splice(deleteIndex, 1);

    // remove from the UI
    const elementToRemove = document.getElementById(id);
    if (elementToRemove) {
      elementToRemove.remove();
    }
    
    // Update submit button and input
    dom.submitBtn.innerText = 'Submit';
    dom.input.value = '';
  }
};

export default deleteTodoList;