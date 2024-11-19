import React, { useEffect,useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import axios from './axiosConfig'




export const AppState = createContext()

function App() {

  const [user, setUser] = useState({})
  //const navigate = useNavigate();
  async function checkUser() {
    const token = localStorage.getItem('token');
    try {
      const { data } = await axios.get("/users/checkuser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data); 
      console.log("User authenticated:", data);
    } catch (error) {
      console.error("User check failed:", error.response || error);
      //navigate("/login"); 
    }
  }
  
  

  useEffect(()=>{
    checkUser();
  },[])
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Routes>
  <Route path="/" element={<navigate to="/home" />} />
  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
    </AppState.Provider>
  );
}

export default App;
