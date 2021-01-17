import React from "react";
import { Provider } from 'react-redux'
import store from "./store/store"
import Header from "./components/Header";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Todo />
        <Modal/>
      </div>
    </Provider>
  );
}

export default App;
