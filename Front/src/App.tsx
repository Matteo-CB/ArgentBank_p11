import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsConnected } from "./features/IsConnected/isConnectedSlice";
import axios from "axios";
import { changeData } from "./features/CurrentProfile/currentProfileSlice";

const App = () => {
  const body= document.querySelector('body')
    if(body !== null){

        body.style.overflow='auto'
    }
  const isConnected = useSelector((state: any) => state.isConnected.value)
  const dispatch = useDispatch()
 if(typeof localStorage.getItem('token') === 'string' && isConnected === false){
  dispatch(toggleIsConnected())
  axios.post('http://localhost:3001/api/v1/user/profile', localStorage.getItem('token'), {
    headers: {
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  }).then((e) => {
    
    const data = {
      firstName: e.data.body.firstName,
      lastName: e.data.body.lastName,
      email: e.data.body.email,
      userName:e.data.body.userName
    }
    
    dispatch(changeData(data))
}
  )
 }
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
