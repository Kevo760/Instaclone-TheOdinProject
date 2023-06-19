import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { CommentModalProvider } from './Context/CommentModalContext';
import { MainUserDataProvider } from './Context/MainUserDataContext';
import { MainPagePostProvier } from './Context/MainPagePostContext';
import { UserProfileProvider } from './Context/UserProfileContext';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <AuthContextProvider>
      <MainUserDataProvider>
        <MainPagePostProvier>
          <UserProfileProvider>
          <CommentModalProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
            </CommentModalProvider>
          </UserProfileProvider>
        </MainPagePostProvier>
      </MainUserDataProvider>
  </AuthContextProvider>
  </HashRouter>
  
  
);


