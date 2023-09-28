import { useSelector } from "react-redux";
import HeaderUser from "../components/HeaderUser";
import Transactions from "./Transactions";
import Loader from "../components/Loader";

const MainUser = () => {
  const username = useSelector((state: any) => state.currentProfile.profil.userName)
  return (<>
  
  {username !== '' ? 
  <main className="main bg-dark">
    <HeaderUser />
    <Transactions />
  </main> 
  : <Loader />}
  </>
  );
};

export default MainUser;
