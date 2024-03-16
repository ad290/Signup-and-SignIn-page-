import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  );
}

export default App;
