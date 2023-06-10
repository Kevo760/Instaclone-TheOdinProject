import './App.css';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Signup from './Components/Signup';
import ImageUploadPage from './Components/Image Upload Page/ImageUploadPage';
import SearchPage from './Components/Search Page/SearchPage';
import MainUserProfilePage from './Components/Profile Page/MainUserProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ImgPageHandlerProvider } from './Context/ImgPageHandlerContext';
import { LoggedInProtection, NotLoggedInProtection } from './Components/LoginProtection';
import { useAuth } from './Context/AuthContext';
import { useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from './firebase';
import {useMainUserData} from './Context/MainUserDataContext'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  z-index: 5;
`

function App() {
  const authUser = useAuth()
  const userUID = authUser.currentUser.uid
  const {handleMainUserData, handleMainUserPostData, mainUserData, mainUserPostData} = useMainUserData()

  const test = () => {
    console.log(mainUserData)
    console.log(mainUserPostData)
 
  }

  // useEffect(() => {
  //   const getMainUserData = () => {
  //     const unsub = onSnapshot(doc(db, 'userPost', userUID), (doc) => {
  //       // converts object data into array
  //       const postValue = doc.data()
  //       const postValueArray = Object.entries(postValue)
  //       // sorts the array by timestamp
  //       const sortPostByTime = postValueArray.sort(function(x,y) {
  //       return y[1].timestamp - x[1].timestamp })
  //       handleMainUserPostData(sortPostByTime)
  //     })

  //     const unsub2 = onSnapshot(doc(db, 'users', userUID), (doc) => {
  //       const userValue = doc.data()
  //       handleMainUserData(userValue)
  //     })

  //     return () => {
  //       unsub()
  //       unsub2()
  //     }
  //   }
    
  //  if(userUID && !mainUserData) {
  //   getMainUserData()
  //   console.log('app')
  //  } else return

  // }, [userUID, mainUserData, mainUserPostData, handleMainUserData, handleMainUserPostData])

  return (
    <div className="App">
      <ButtonStyled onClick={test}>test</ButtonStyled>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<MainPage />} />
            <Route path='login' element={<LoggedInProtection authUser={authUser}> <Login /> </LoggedInProtection>} />
            <Route path='signup' element={<LoggedInProtection authUser={authUser}> <Signup /> </LoggedInProtection>} />
            <Route path='search' element={<NotLoggedInProtection authUser={authUser}> <SearchPage/> </NotLoggedInProtection>} />
            <Route path='post' 
              element={
              <NotLoggedInProtection authUser={authUser}>
                <ImgPageHandlerProvider>
                  <ImageUploadPage />
                </ImgPageHandlerProvider>
              </NotLoggedInProtection>} 
              />
            <Route path='myprofile' element={<NotLoggedInProtection authUser={authUser}> <MainUserProfilePage/> </NotLoggedInProtection>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
