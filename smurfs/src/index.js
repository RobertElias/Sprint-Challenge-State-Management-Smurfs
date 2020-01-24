import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import NewSmurf from "./components/Form";
import SmurfVillage from "./components/SmurfVillage";
import reducer from './reducer/index';


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <h1>Enter a Smurf!!!</h1>

      <NewSmurf />
      <SmurfVillage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
