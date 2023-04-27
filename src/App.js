import { useEffect, useState } from 'react';
import './App.css';
import BottomNav from './Components/BottomNav';
import CommentModal from './Components/Comment Modal/CommentModal';
import ImagePostModal from './Components/Image Post Modal/ImagePostModal';
import Login from './Components/Login';
import Logobar from './Components/Logobar';
import MainPage from './Components/MainPage';
import NotLoggedInTopNav from './Components/NotLoggedInTopNav';
import PostBox from './Components/PostBox';
import EditProfilePage from './Components/Profile Page/EditProfilePage';
import UserProfile from './Components/Profile Page/UserProfile';
import Signup from './Components/Signup';
import ImageUploadPage from './Components/Image Upload Page/ImageUploadPage';
import SearchPage from './Components/Search Page/SearchPage';
import MainUserProfilePage from './Components/Profile Page/MainUserProfilePage';

function App() {

  return (
    <div className="App">
      <ImageUploadPage />
    </div>
  );
}

export default App;
