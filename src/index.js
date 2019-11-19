import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import TextUI from "./containers/TextUI";

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <h1>Redux 201</h1>
          <TextUI />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
