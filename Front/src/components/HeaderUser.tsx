import axios from "axios";
import { useSelector } from "react-redux";

const HeaderUser = () => {
  const profil = useSelector((state: any) => state.currentProfile.profil);
  let token: string | null = null;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  } else if (sessionStorage.getItem("token")) {
    token = sessionStorage.getItem("token");
  }
  function editName() {
    let newUserName = prompt("Edit name", profil.userName);
    if (newUserName === null) {
      newUserName = profil.userName;
    }

    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUserName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => (window.location.href = "/profile"));
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {profil.firstName ? `${profil.userName} !` : "---- ---- !"}
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
    </div>
  );
};

export default HeaderUser;
