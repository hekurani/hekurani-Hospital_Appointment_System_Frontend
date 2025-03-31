"use client";
import { useState } from "react";

const appointmentsData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    patientName: `Patient ${index + 1}`,
    doctor: `Dr. Smith ${index % 5}`,
    department: ["Cardiology", "Neurology", "Dermatology", "Pediatrics", "Orthopedics"][index % 5],
    appointmentDate: `2025-04-${(index % 30) + 1}`,
    status: ["Pending", "Completed", "Cancelled", "Upcoming"][(index % 4)],
  }));
  
  const PAGE_SIZE = 10;

  const AppointmentsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(appointmentsData.length / PAGE_SIZE);
  
    const handlePageChange = (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
  
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedAppointments = appointmentsData.slice(startIndex, startIndex + PAGE_SIZE);
  
    return (
      <div className="p-6 bg-white shadow-md rounded-xl w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h2>
  
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Doctor</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.doctor}</td>
                  <td className="p-3">{appointment.department}</td>
                  <td className="p-3">{appointment.appointmentDate}</td>
                  <td className={`p-3 font-medium 
                    ${appointment.status === "Completed" ? "text-green-500" :
                      appointment.status === "Cancelled" ? "text-red-500" :
                      appointment.status === "Upcoming" ? "text-blue-500" : "text-yellow-500"}`}>
                    {appointment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
  
          <span className="text-gray-700 text-sm">
            Page {currentPage} of {totalPages}
          </span>
  
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default AppointmentsList;