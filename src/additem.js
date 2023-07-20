import { getItems, setItems } from './storage.js';
import { postContainer, addButton, addNewInput } from './elements.js';

const addItem = () => {
    const description = addNewInput.value;
  
    const items = getItems();
    items.push({
      description,
      completed: false,
      index: items.length,
    });
    setItems(items);
  
    addNewInput.value = ''; // Clear the input field after adding the item
    postContainer.dispatchEvent(new CustomEvent('itemAdded'));
  };

  export { addItem };