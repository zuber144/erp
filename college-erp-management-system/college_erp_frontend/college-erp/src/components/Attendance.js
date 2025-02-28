import React, { useState } from "react";
import { format } from "date-fns";
import { DatePicker } from "./Date-picker";

const Attendance = () => {
  const [mode, setMode] = useState("range");
  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });

  const handleDateChange = (date) => setDate(date);
  const handleStartDateChange = (date) =>
    setDateRange((prev) => ({ ...prev, start: date }));
  const handleEndDateChange = (date) =>
    setDateRange((prev) => ({ ...prev, end: date }));

  const handleSearch = () => {
    if (mode === "range") {
      alert(
        `Searched for Date Range: ${format(dateRange.start, "PPP")} - ${format(
          dateRange.end,
          "PPP"
        )}`
      );
    } else if (mode === "single") {
      alert(`Searched for Date: ${format(date, "PPP")}`);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-4xl mr-auto m-[2.4%]">
      {/* Dashboard Container */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-left mb-6 text-gray-800 flex items-center">
            <span className="text-blue-600 mr-2">📅</span> Attendance Dashboard
          </h2>

          {/* Mode Selection Tabs */}
          <div className="flex justify-start mb-6 space-x-4">
            {["range", "single"].map((m) => (
              <button
                key={m}
                className={`px-5 py-3 rounded-lg font-medium transition-all duration-200 ${
                  mode === m
                    ? "bg-blue-600 text-white shadow-md transform scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setMode(m)}
              >
                {m === "range" ? "📆 Date Range" : "📍 Single Date"}
              </button>
            ))}
          </div>

          {/* Date Pickers */}
          <div className="max-w-lg mb-6">
            {mode === "range" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DatePicker
                  label="Start Date"
                  selected={dateRange.start}
                  onChange={handleStartDateChange}
                  className="w-full"
                />
                <DatePicker
                  label="End Date"
                  selected={dateRange.end}
                  onChange={handleEndDateChange}
                  className="w-full"
                />
              </div>
            ) : (
              <div className="max-w-xs">
                <DatePicker
                  label="Select Date"
                  selected={date}
                  onChange={handleDateChange}
                  className="w-full"
                />
              </div>
            )}
          </div>

          {/* Search Button */}
          <div className="flex justify-start mb-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center shadow-md"
              onClick={handleSearch}
            >
              <span className="mr-2">🔍</span> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
