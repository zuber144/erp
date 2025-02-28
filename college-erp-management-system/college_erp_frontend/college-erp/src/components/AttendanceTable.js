import React from "react";

export const AttendanceTable = ({ attendanceData }) => {
  if (!attendanceData || attendanceData.length === 0) {
    return <p className="text-gray-600">No attendance data available.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Session</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record, index) => (
            <tr
              key={index}
              className={`border-b ${
                record.status === "present" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <td className="px-6 py-3">{record.session}</td>
              <td
                className={`px-6 py-3 font-medium ${
                  record.status === "present"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
