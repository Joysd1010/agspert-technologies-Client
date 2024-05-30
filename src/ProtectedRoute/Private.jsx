import  { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { InfinitySpin } from "react-loader-spinner";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
 console.log(location)
  if (loading) {
    return (
      <div className="flex justify-around">
       <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please login to continue",
      showConfirmButton: false,
      timer: 2000
    });
    return <Navigate state={{ from: location }} to="/" replace></Navigate>;
  }
};

export default Privateroute;
