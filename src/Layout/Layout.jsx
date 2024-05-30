import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Nav/NavBar";


const Layout = () => {
  return (
    <div className=" md:px-20">
      <NavBar/>
      <Outlet />
    </div>
  );
};

export default Layout;
