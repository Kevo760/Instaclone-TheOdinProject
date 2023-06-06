import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { CommentModalProvider } from './Context/CommentModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CommentModalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CommentModalProvider>
  </AuthContextProvider>
  
);


