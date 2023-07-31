import addItemList from '../handlers/addButtonHandler.js';
import { dom } from '../dom.js';
import { data } from '../data.js';

const handleKeyPress = (e) => {
  dom.error.innerText = '';
  dom.error.classList.remove('error1');
};

dom.input.addEventListener('keypress', handleKeyPress);