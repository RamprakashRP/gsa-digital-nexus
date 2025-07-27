import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your main App component
import './index.css'; // Global styles, or you can rename/merge into App.css

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);