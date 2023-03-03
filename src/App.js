import './App.css';
import BottomNav from './Components/BottomNav';
import Login from './Components/Login';
import Logobar from './Components/Logobar';
import PostBox from './Components/PostBox';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Logobar></Logobar>
      <PostBox></PostBox>
      <BottomNav></BottomNav>
    </div>
  );
}

export default App;
