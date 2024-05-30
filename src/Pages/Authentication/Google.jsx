import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Google = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/active";

  

  const handleGoogleSignIn = () => {
    try {
        googleSignIn()
        .then((result) => {
            
                if (result.user) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Added to database",
                    showConfirmButton: false,
                    timer: 1500,
                  });
    
                  navigate(from, { replace: true });
                }
              });
          
          
    }
           
      catch (error) {
    console.log(error)
  }
     
  };

  
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full my-4 text-center ">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 px-3 py-1 mx-auto my-2 text-xl font-semibold text-blue-900 bg-white border rounded-lg border-zincflex"
        >
          <FcGoogle />
 Login With Google
        </button>
      </div>
    </div>
  );
};

export default Google;
