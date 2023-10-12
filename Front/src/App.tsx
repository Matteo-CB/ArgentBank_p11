import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsConnected } from "./features/IsConnected/isConnectedSlice";
import axios from "axios";
import { changeData } from "./features/CurrentProfile/currentProfileSlice";

const App = () => {
  const body = document.querySelector("body");
  if (body !== null) {
    body.style.overflow = "auto";
  }
  const isConnected = useSelector((state: any) => state.isConnected.value);
  const dispatch = useDispatch();
  let token: string | null = null;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  } else if (sessionStorage.getItem("token")) {
    token = sessionStorage.getItem("token");
  }
  if (
    typeof token === "string" &&
    isConnected === false
  ) {
    dispatch(toggleIsConnected());
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        token,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => {
        const data = {
          firstName: e.data.body.firstName,
          lastName: e.data.body.lastName,
          email: e.data.body.email,
          userName: e.data.body.userName,
        };

        dispatch(changeData(data));
      });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        {isConnected && <Route path="/profile" element={<User />} />}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
