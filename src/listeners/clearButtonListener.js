import  dom  from '../dom.js';
import  data  from '../data.js';

const handleClearButtonClick = () => {
  dom.itemsList.innerHTML = '';
  data.items = [];
};

dom.clearBtn.addEventListener('click', handleClearButtonClick);