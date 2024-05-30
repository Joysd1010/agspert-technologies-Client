import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
// import Google from "./Google";
import { AuthContext } from "../../Provider/AuthProvider";
import Google from "./Google";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();
  const [Hide, setHide] = useState(true);
  const from = location.state?.from?.pathname || "/active";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    console.log(data);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged in",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1717027200&semt=ais_user')`,
      }}
      className="bg-no-repeat bg-cover pd-16 md:p-20 flex justify-around"
    >
      <div className=" mx-auto">
        <div>
          <div className="flex flex-col gap-2 px-10 py-5 bg-blue-500 w-96 rounded-xl">
            <h1 className="text-3xl text-center text-white ">Login Here!!</h1>
            <hr />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="mail" className="text-xl text-white">
                Enter Email id
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter mail here"
                className="w-full max-w-xs py-1 px-2 rounded-xl bg-white input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label htmlFor="pass" className="text-xl text-white">
                Enter password
              </label>
              <input
                type={`${!Hide ? "text" : "password"}`}
                id="pass"
                placeholder="Enter your password"
                className="w-full max-w-xs py-1 px-2 bg-white input input-bordered rounded-xl"
                {...register("password", { required: true })}
              /> {Hide ? (
                <div
                  onClick={() => setHide(false)}
                  className=" z-50 w-10 relative left-[132px] md:left-64 bottom-8 text-blue-600"
                >
                  <BiSolidShow size={20} />
                </div>
              ) : (
                <div
                  onClick={() => setHide(true)}
                  className=" relative z-50 w-10 left-[132px] md:left-64 bottom-8 text-blue-600"
                >
                  <BiSolidHide size={20} />
                </div>
              )}
              {errors.password && <span>This field is required</span>}
              <input
                type="submit"
                value="Login"
                className="w-full max-w-xs my-5 bg-slate-500 py-2 rounded-xl text-white input input-bordered btn"
              />{" "}
            </form>
            <p className="text-xl text-white">{error}</p>
            <Google />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
