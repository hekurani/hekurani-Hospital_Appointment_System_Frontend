"use client"; // Required for Next.js app router

import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const fullData = {
  lastMonth: [
    { date: "Week 1", completed: 15 },
    { date: "Week 2", completed: 30 },
    { date: "Week 3", completed: 50 },
    { date: "Week 4", completed: 70 },
  ],
  lastWeek: [
    { date: "Mon", completed: 10 },
    { date: "Tue", completed: 18 },
    { date: "Wed", completed: 25 },
    { date: "Thu", completed: 30 },
    { date: "Fri", completed: 50 },
    { date: "Sat", completed: 40 },
    { date: "Sun", completed: 35 },
  ],
  lastYear: [
    { date: "Jan", completed: 10 },
    { date: "Feb", completed: 18 },
    { date: "Mar", completed: 25 },
    { date: "Apr", completed: 40 },
    { date: "May", completed: 32 },
    { date: "Jun", completed: 45 },
    { date: "Jul", completed: 50 },
    { date: "Aug", completed: 38 },
    { date: "Sep", completed: 55 },
    { date: "Oct", completed: 60 },
    { date: "Nov", completed: 70 },
    { date: "Dec", completed: 80 },
  ],
};

const PatientsGraph = () => {
  const [selectedRange, setSelectedRange] = useState<"lastMonth" | "lastWeek" | "lastYear">("lastMonth");

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-5xl">
      {/* Header with Filter */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Patients Activity</h2>
        
        {/* Filter Dropdown */}
        <select
          className="border border-gray-300 text-gray-800 text-sm rounded-lg p-2 cursor-pointer"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value as "lastMonth" | "lastWeek" | "lastYear")}
        >
          <option value="lastMonth">Last Month</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={fullData[selectedRange]} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="date" tick={{ fill: "#4B5563" }} />
          <YAxis allowDecimals={false} tick={{ fill: "#4B5563" }} />
          <Tooltip />
          <Area type="monotone" dataKey="completed" stroke="#107AB0" fill="#68AFD3" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientsGraph;
