import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-300 flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#2D2A43] text-white flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <img
            src="https://www.sgpbellary.com/images/clients/sgp.png"
            alt="College Logo"
            className="h-10 w-auto"
          />
          <div className="text-lg font-semibold">Sanjay Gandhi Polytechnic</div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <FaUserCircle className="text-gray-300 text-3xl" />
            <div className="text-white">
              <p className="font-semibold">Mohammed Nawaz</p>
              <p className="text-xs text-gray-300">Reg: 459CS22027 | 6th Sem</p>
            </div>
          </div>
          <button
            className="bg-[#9569D8] hover:bg-[#ac3131] px-4 py-2 rounded text-white font-medium"
            onClick={() => {
              navigate("/");
            }}
          >
            Log Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {activeTab === "Dashboard" ? (
          <div
            className="bg-[#2D2A43] p-8 rounded-lg shadow-2xl w-96 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: "0 10px 25px rgba(149, 105, 216, 0.4)" }}
          >
            <div className="bg-[#3D3A53] p-6 rounded-full mb-4 shadow-inner">
              <FaUserCircle className="text-gray-400 text-8xl" />
            </div>
            <div className="w-full bg-[#3D3A53] p-6 rounded-lg text-center shadow-md">
              <h2 className="text-xl font-semibold text-white">
                Name: Mohammed Nawaz
              </h2>
              <p className="text-white mt-2">Reg: 459CS22027</p>
              <p className="text-white">Sem: 6th Sem</p>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-semibold text-[#2D2A43]">
            {activeTab} Section
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-gray-200 py-4 flex justify-center gap-12 text-xl font-semibold">
        {["Dashboard", "Attendance", "Results"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 rounded ${
              activeTab === tab
                ? "bg-[#9569D8] text-white shadow-md"
                : "text-[#2D2A43] hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
