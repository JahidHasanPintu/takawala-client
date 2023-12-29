import './App.css';
import Login from './Components/Login/Login';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Components/Profile/Profile';
import Setting from './Components/Setting/Setting';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="profile" element={<RequireAuth> <Profile /></RequireAuth>}></Route>
        <Route path="setting" element={ <RequireAuth><Setting /></RequireAuth> }></Route>
        {/* <Route path="/account/*" element={<RequireAuth>
          <Account />
        </RequireAuth>}></Route> */}

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
