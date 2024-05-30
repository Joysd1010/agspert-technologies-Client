import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Nav/NavBar";


const Layout = () => {
  return (
    <div className="py-3">
      <NavBar/>
      <Outlet />
    </div>
  );
};

export default Layout;
