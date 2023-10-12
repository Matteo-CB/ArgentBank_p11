import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../features/CurrentProfile/currentProfileSlice";
import { toggleIsConnected } from "../features/IsConnected/isConnectedSlice";

const Navigation = () => {
  const isConnected: boolean = useAppSelector(
    (state) => state.isConnected.value
  );
  const profil = useSelector((state: any) => state.currentProfile.profil);
  const dispatch = useDispatch();
  localStorage.setItem("username", profil.firstName + profil.lastName);
  function signOut(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    e.preventDefault();
    dispatch(removeData());
    dispatch(toggleIsConnected());
    localStorage.clear();
    sessionStorage.clear();
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }
  return (
    <>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo-min.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        {isConnected ? (
          <div>
            <NavLink className="main-nav-item" to="/profile">
              {profil ? (
                <>
                  <i className="fa fa-user-circle"></i>
                  <span>{` ${profil.firstName} ${profil.lastName}`}</span>
                </>
              ) : (
                ""
              )}
            </NavLink>
            <NavLink
              className="main-nav-item"
              to="/"
              onClick={(e) => signOut(e)}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink className="main-nav-item" to={"/login"}>
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
