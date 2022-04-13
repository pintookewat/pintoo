import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Componets/Redux/Store";





ReactDOM.render(


  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>
  ,
  document.getElementById('root')
);

