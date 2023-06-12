import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { CommentModalProvider } from './Context/CommentModalContext';
import { MainUserDataProvider } from './Context/MainUserDataContext';
import { MainPagePostProvier } from './Context/MainPagePostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CommentModalProvider>
      <MainUserDataProvider>
        <MainPagePostProvier>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </MainPagePostProvier>
      </MainUserDataProvider>
    </CommentModalProvider>
  </AuthContextProvider>
  
);


