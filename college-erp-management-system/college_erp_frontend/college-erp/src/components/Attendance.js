import React, { useState } from "react";
import { format } from "date-fns";
import { DatePicker } from "./Date-picker";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AttendanceTable } from "./AttendanceTable";

const Attendance = () => {
  const [mode, setMode] = useState("single");
  const [date, setDate] = useState(new Date());
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });
  const [attendanceData, setAttendanceData] = useState([]);

  const location = useLocation();
  const student = location.state?.student.data;
  const registerNo = student.registrationNumber;

  const handleDateChange = (date) => setDate(date);
  const handleStartDateChange = (date) =>
    setDateRange((prev) => ({ ...prev, start: date }));
  const handleEndDateChange = (date) =>
    setDateRange((prev) => ({ ...prev, end: date }));

  const handleSearch = async () => {
    if (mode === "range") {
      try {
        const response = await axios.get(`/students/${registerNo}/range`, {
          params: {
            startDate: format(dateRange.start, "yyyy-MM-dd"),
            endDate: format(dateRange.end, "yyyy-MM-dd"),
          },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const data = response.data;
        console.log(JSON.stringify(data));
      } catch (error) {
        alert(
          error.response?.statusText ||
            "Network error or server not responding."
        );
      }
    } else if (mode === "single") {
      try {
        const response = await axios.get(`/students/${registerNo}/date`, {
          params: { date: format(date, "yyyy-MM-dd") },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const data = response.data;
        const fetchedAttendanceData = Array.isArray(
          JSON.parse(data.data[0]?.sessions)
        )
          ? JSON.parse(data.data[0]?.sessions)
          : [];
        setAttendanceData(fetchedAttendanceData);
      } catch (error) {
        alert(
          error.response?.statusText ||
            "Network error or server not responding."
        );
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-md max-w-7xl mx-auto">
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-6">
          <span className="text-blue-600 mr-2">📅</span> Attendance Dashboard
        </h2>

        {/* Mode Selection Tabs */}
        <div className="flex mb-6 space-x-4">
          {["range", "single"].map((m) => (
            <button
              key={m}
              className={`px-5 py-3 rounded-lg font-medium transition-all duration-200 ${
                mode === m
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setMode(m)}
            >
              {m === "range" ? "📆 Date Range" : "📍 Single Date"}
            </button>
          ))}
        </div>

        {/* Date Pickers */}
        <div className="mb-6">
          {mode === "range" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DatePicker
                label="Start Date"
                selected={dateRange.start}
                onChange={handleStartDateChange}
              />
              <DatePicker
                label="End Date"
                selected={dateRange.end}
                onChange={handleEndDateChange}
              />
            </div>
          ) : (
            <DatePicker
              label="Select Date"
              selected={date}
              onChange={handleDateChange}
              className="w-full"
            />
          )}
        </div>

        {/* Search Button */}
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center shadow-md"
          onClick={handleSearch}
        >
          <span className="mr-2">🔍</span> Search
        </button>
      </div>
      {mode === "single" ? (
        <div className="bg-white rounded-lg shadow-sm p-6 flex-1 overflow-auto">
          <AttendanceTable attendanceData={attendanceData} />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6 flex-1 overflow-auto">
          <AttendanceTable attendanceData={attendanceData} />
        </div>
      )}
      {/* Attendance Table Section */}
    </div>
  );
};

export default Attendance;
