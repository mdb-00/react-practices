import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimalList from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
root.render(<AnimalList animals={animals} />);