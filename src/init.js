import  dom  from './dom.js';
import data from './data.js';
import createItem from './components/todoItem.js';

// default show some items
data.items.forEach((itemData) => {
    const item = createItem(itemData);
    dom.itemsList.append(item);
});

import './listeners/addButtonListener.js';
import './listeners/submitButtonListener.js';
import './listeners/clearButtonListener.js';