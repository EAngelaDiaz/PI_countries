import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './redux/store/store.js';
import { Provider } from 'react-redux';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
)
