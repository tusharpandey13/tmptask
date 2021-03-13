import React, { useReducer } from 'react';
import { initialState, reducer, store } from './store';
import { Provider } from 'react-redux';

import Main from './components/main';
import './App.css';

function App() {
  // const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider store={store}>
      <Main
      // store={store} dispatch={dispatch} initialState={initialState}
      ></Main>
    </Provider>
  );
}

export default App;
