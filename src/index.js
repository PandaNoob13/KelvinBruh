import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { apiClientFactory } from './shared/ApiClientFactory';
import { clientInstance } from './shared/AxiosClient';
import { ServiceFactory } from './services/ServiceFactory';
import { DepProvider } from './shared/DepContext';

const apiClient = apiClientFactory(clientInstance)
const services = ServiceFactory(apiClient)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DepProvider services={services}>
      <App />
    </DepProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
