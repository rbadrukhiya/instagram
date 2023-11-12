import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
// import Register from './component/form-register';
import Form_Register from './component/form-register';
import Login from './component/form-login';
import Feed from './component/feed';
import Chat from './component/chat';
import Explore from './component/explore';
import Market from './component/market';
import Profile from './component/profile';
import Setting from './component/setting';
import Trending from './component/trending';
import Edit_profile from './component/edit_profile';
import Security from './component/security';
import Forget from './component/forget';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={ <Form_Register/> } />
        <Route path="/login" element={ window.localStorage.getItem("uid") == null ?<Login/> : <Feed/>} />
        <Route path="/" element={window.localStorage.getItem("uid") !== null ?  <Feed/>  : <Login/>} />
        {/* <Route path="/" element={ <Feed/> } /> */}
        <Route path="/chat" element={ <Chat/> } />
        <Route path="/explore" element={ <Explore/> } />
        <Route path="/market" element={ <Market/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/setting" element={ <Setting/> } />
        <Route path="/security" element={ <Security/> } />
        <Route path="/trending" element={ <Trending/> } />
        <Route path="/forget" element={ <Forget/> } />
        <Route path="/edit_profile/:id" element={ <Edit_profile/> } />




      </Routes>
    </div>
  );
}

export default App;
