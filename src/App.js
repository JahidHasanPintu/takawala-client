import './App.css';
import Login from './Components/Login/Login';

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home />}></Route>

        <Route path="login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="/account/*" element={<RequireAuth>
          <Account />
        </RequireAuth>}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
