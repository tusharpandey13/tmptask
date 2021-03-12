const initialState = {
  items: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_ITEMS':
      return { ...state, items: action.items };
    case 'RESET_ITEMS':
      return { ...state, items: initialState.items };
    default:
      return state;
  }
};

export { initialState, reducer };
