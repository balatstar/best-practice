jest.mock('./storage', () => {
    let items = [
      {"description":"h","completed":false,"index":0},
      {"description":"dlskdjalskd","completed":false,"index":1},
      {"description":"g","completed":false,"index":2},
      {"description":"sdfdfsd","completed":false,"index":3}
    ];
    
/*    return {
      getItems: () => items,
      setItems: (updatedItems) => {
        items.length = 0; 
        items.push(...updatedItems); 
      }
    };*/

    return {
        getItems: () => items,
        setItems: (updatedItems) => {
          items = updatedItems.map((item, idx) => ({
            ...item,
            index: idx
          }));
        }
    }
  });
  
  
  const { deleteItem } = require('./items');
  
  test('deletes element from items array', () => {
    const expectedResult = [
      {"description":"h","completed":false,"index":0},
      {"description":"g","completed":false,"index":1},
      {"description":"sdfdfsd","completed":false,"index":2}
    ];
    deleteItem(1); 
    const updatedItems = require('./storage').getItems();
    expect(updatedItems).toEqual(expectedResult);
  });
  