import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className=" h-screen w-screen"
        src="https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png"
        alt="404"
      />
      <div className=" flex justify-around relative bottom-36 ">
        <Link to={'/dash'} className=" bg-black text-white px-5 py-3 rounded-xl shadow-3xl shadow-gray-600">
          Back to DashBoard
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
