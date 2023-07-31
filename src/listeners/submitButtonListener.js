import addItemList from '../handlers/addButtonHandler.js';
import  dom  from '../dom.js';


const handleSubmitButtonClick = (e) => {
  e.preventDefault();
  addItemList(dom.input.value);
};

dom.submitBtn.addEventListener('click', handleSubmitButtonClick);