export default function BottomNavBar({ activeTab, setActiveTab }) {
  const tabs = ["Dashboard", "Attendance", "Results"];

  return (
    <div className="bg-gray-200 py-3 md:py-4 flex justify-center gap-6 md:gap-12 text-sm md:text-xl font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 md:px-6 py-2 md:py-3 rounded transition-all duration-300 ${
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
  );
}
