import { useEffect, useState } from 'react';
import './App.css';
import BottomNav from './Components/BottomNav';
import CommentModal from './Components/Comment Modal/CommentModal';
import Login from './Components/Login';
import Logobar from './Components/Logobar';
import NotLoggedInTopNav from './Components/NotLoggedInTopNav';
import PostBox from './Components/PostBox';
import EditProfilePage from './Components/Profile Page/EditProfilePage';
import UserProfile from './Components/Profile Page/UserProfile';
import Signup from './Components/Signup';

function App() {

  const [show, setShow] = useState(false)

  function test() {
    setShow(prevState => !prevState)
  }



  return (
    <div className="App">
      <NotLoggedInTopNav />
      <UserProfile></UserProfile>
    </div>
  );
}

export default App;
