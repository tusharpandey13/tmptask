import React, { useReducer } from 'react';
import { initialState, reducer } from './store';

import Main from './components/main';
import './App.css';

function App() {
  const [store, dispatch] = useReducer(reducer, initialState);
  return <Main store={store} dispatch={dispatch} initialState={initialState}></Main>;
}

export default App;
