jest.mock('./storage', () => {
    let items = [
      {"description":"h","completed":false,"index":0},
      {"description":"dlskdjalskd","completed":false,"index":1},
      {"description":"g","completed":false,"index":2},
      {"description":"sdfdfsd","completed":false,"index":3}
    ];

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

  jest.mock('./elements', () => {
    const dispatchEventMock = jest.fn();
    const postContainer = {
      dispatchEvent: dispatchEventMock, 
    }; 
    const addNewInput = { value: 'test description' };
    return {
      postContainer,
      addNewInput,
      createItemElement: jest.fn((item, index) => {
        // To follow
      }),
    };
  });
  
  
  const { addItem } = require('./additem');
  
  test('adds element to items array', () => {
    const expectedResult = [
        {"description":"h","completed":false,"index":0},
        {"description":"dlskdjalskd","completed":false,"index":1},
        {"description":"g","completed":false,"index":2},
        {"description":"sdfdfsd","completed":false,"index":3},
        {"description":"test description","completed":false,"index":4}
    ];
    global.addNewInput = { value: 'test description' };
    addItem();
    
    const updatedItems = require('./storage').getItems();
    expect(updatedItems).toEqual(expectedResult);

    delete global.addNewInput;
  });
  