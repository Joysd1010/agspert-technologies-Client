import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const {user,logOut}=useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" py-5 flex justify-between items-center">
      <div className=" flex gap-3 items-center">
        <NavLink
          to={"/active"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base md:text-lg px-3 py-2 rounded-md bg-blue-600 duration-300 text-center"
              : "bg-gray-100 font-bold rounded-md text-base md:text-lg py-2 px-5 duration-300 text-center"
          }
        >
          Active Sale Order
        </NavLink>
        <NavLink
          to={"/complete"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base md:text-lg px-3 py-2 rounded-md bg-blue-600 duration-300 text-center"
              : "bg-gray-100 font-bold rounded-md text-base md:text-lg py-2 px-5 duration-300 text-center"
          }
        >
          Complete Sale Order
        </NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <NavLink
          to="/SaleOrder"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold text-base md:text-lg px-3 py-2 rounded-md bg-blue-600 duration-300 text-center"
              : "bg-gray-100 font-bold rounded-md text-base md:text-lg py-2 px-5 duration-300 text-center"
          }
        >
          + Sale Order
        </NavLink>
       {
        user?<button onClick={handleLogOut}>Logout</button>: <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white font-bold text-base md:text-lg px-3 py-2 rounded-md bg-blue-600 duration-300 text-center"
            : "bg-gray-100 font-bold rounded-md text-base md:text-lg py-2 px-5 duration-300 text-center"
        }
      >
        Login
      </NavLink>

       }

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 "
        >
          {darkMode ? <MdLightMode size={30}/> : <MdDarkMode size={30} />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
