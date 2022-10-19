import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { mainReducer } from './redux';
import { AuthProvider } from './hook/useAuth';
const root = ReactDOM.createRoot(document.getElementById('root'));
let initialState = { loginReducer: [{ id: '0', completed: false, name: 'Login out' }] }
const store= createStore(mainReducer, initialState);
root.render(
  <React.StrictMode>
    <BrowserRouter>   
    <AuthProvider>
    <Provider  store={store}>
    <App/>
    </Provider>
    </AuthProvider>
    </BrowserRouter>
    </React.StrictMode>
);
