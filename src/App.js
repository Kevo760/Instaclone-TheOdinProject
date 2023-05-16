import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Signup from './Components/Signup';
import ImageUploadPage from './Components/Image Upload Page/ImageUploadPage';
import SearchPage from './Components/Search Page/SearchPage';
import MainUserProfilePage from './Components/Profile Page/MainUserProfilePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import { ImgPageHandlerProvider } from './Context/ImgPageHandlerContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)

  const NotLoggedInProtection = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/login/'/>
    }
    return(
      children
    )
  }

  const LoggedInProtection = ({children}) => {
    if(currentUser) {
      return <Navigate to='/'/>
    }
    return(
      children
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<MainPage />} />
            <Route path='login' element={<LoggedInProtection> <Login /> </LoggedInProtection>} />
            <Route path='signup' element={<LoggedInProtection> <Signup /> </LoggedInProtection>} />
            <Route path='search' element={<NotLoggedInProtection> <SearchPage/> </NotLoggedInProtection>} />
            <Route path='post' 
              element={
              <NotLoggedInProtection>
                <ImgPageHandlerProvider>
                  <ImageUploadPage />
                </ImgPageHandlerProvider>
              </NotLoggedInProtection>} 
              />
            <Route path='myprofile' element={<NotLoggedInProtection> <MainUserProfilePage/> </NotLoggedInProtection>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
