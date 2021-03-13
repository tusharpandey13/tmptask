import { createStore } from 'redux';

const initialState = {
  items: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ITEMS':
      return { ...state, items: action.items };
    case 'RESET_ITEMS':
      return { ...state, items: initialState.items };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export { initialState, reducer, store };
