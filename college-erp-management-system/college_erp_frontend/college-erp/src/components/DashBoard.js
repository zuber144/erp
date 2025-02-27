import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="h-screen flex flex-col bg-[#bababb]">
        {/* Navbar */}
        <nav className="bg-[#2e2e48] text-white flex justify-between items-center p-4 shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="https://www.sgpbellary.com/images/clients/sgp.png"
              alt="College Logo"
              className="h-10 w-auto"
            />
            <span className="text-lg font-semibold">
              Sanjay Gandhi Polytechnic
            </span>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-[#7a57b7] transition duration-200"
            >
              Attendance
            </a>
            <a
              href="#"
              className="hover:text-[#7a57b7] transition duration-200"
            >
              Result
            </a>
          </div>
          <button className="bg-[#7a57b7] px-4 py-2 rounded hover:bg-[#5629c0] transition duration-200">
            Logout
          </button>
        </nav>

        {/* Empty Page Content */}
        <div className="flex-1 flex justify-center items-center text-gray-700">
          <div className="text-center text-xl font-semibold">
            Welcome to the Dashboard
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
