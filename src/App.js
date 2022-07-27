import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
// import SignIn from './components/screens/SignIn';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import LandingPage from './components/screens/landing-page';
import PostView from './components/screens/postview';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>   
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/landing-page" element={ <LandingPage/> }/>
    <Route path="/postview" element={ <PostView/> }/> 
    {/* <Route path="/signin" element={ <SignIn/> } /> */}
    <Route path="/signup" element={ <Signup/> } />
    <Route path="/profile" element={ <Profile/> } />
    <Route path="/createpost" element={ <CreatePost/> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;































