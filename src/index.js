import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { CommentModalProvider } from './Context/CommentModalContext';
import { MainUserDataProvider } from './Context/MainUserDataContext';
import { MainPagePostProvier } from './Context/MainPagePostContext';
import { UserProfileProvider } from './Context/UserProfileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <CommentModalProvider>
      <MainUserDataProvider>
        <MainPagePostProvier>
          <UserProfileProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </UserProfileProvider>
        </MainPagePostProvier>
      </MainUserDataProvider>
    </CommentModalProvider>
  </AuthContextProvider>
  
);


