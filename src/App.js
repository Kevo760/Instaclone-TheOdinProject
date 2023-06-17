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
import { useMainPagePost } from './Context/MainPagePostContext';
import { useUserProfile } from './Context/UserProfileContext';
import {UserProfilePageProtection} from './Components/UserProfilePageProtection';
import UserProfile from './Components/Profile Page/UserProfile';
import LoadingBox from './Components/LoadingBox';


function App() {
  const authUser = useAuth()
  const {userProfileID} = useUserProfile()
  const {mainPagePostData, handleMainPagePostData} = useMainPagePost()

  useEffect(() => {
    // Grabs all MainPostData from firebase
    const getMainPagePost = () => {
      const unsub = onSnapshot(doc(db, 'mainPagePost', 'post'), (doc) => {
        // sets object data to an array
        const dataToArray = Object.entries(doc.data())
        // sorts the array by newest first
        const sortPostByTime = dataToArray.sort(function(x,y) {
        return y[1].timestamp - x[1].timestamp })
        handleMainPagePostData(sortPostByTime)
      })

      return () => {
        unsub()
      }
    }

    if(!mainPagePostData) {
      console.log('mainPostData')
      getMainPagePost()
    }
  }, [mainPagePostData, handleMainPagePostData, authUser])


  return (
    <div className="App">
      {
        mainPagePostData ?
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<MainPage />} />
              <Route path='login' element={<LoggedInProtection authUser={authUser.currentUser}> <Login /> </LoggedInProtection>} />
              <Route path='signup' element={<LoggedInProtection authUser={authUser.currentUser}> <Signup /> </LoggedInProtection>} />
              <Route path='search' element={<NotLoggedInProtection authUser={authUser.currentUser}> <SearchPage/> </NotLoggedInProtection>} />
              <Route path='post' 
                element={
                <NotLoggedInProtection authUser={authUser.currentUser}>
                  <ImgPageHandlerProvider>
                    <ImageUploadPage />
                  </ImgPageHandlerProvider>
                </NotLoggedInProtection>} 
                />
              <Route path='myprofile' element={<NotLoggedInProtection authUser={authUser.currentUser}> <MainUserProfilePage/> </NotLoggedInProtection>} />
              <Route path='userprofile' element={<UserProfilePageProtection userProfileID={userProfileID}> <UserProfile/> </UserProfilePageProtection>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        :
        <LoadingBox />
        }
    </div>
  );
}

export default App;
