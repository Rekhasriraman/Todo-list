import  dom  from '../dom.js';
import  data  from '../data.js';

const editTodoList = (id) => {
  const item = data.items.find(item => item.id === id);
  if (item) {
    dom.input.value = item.text;
  }
};

export default editTodoList;