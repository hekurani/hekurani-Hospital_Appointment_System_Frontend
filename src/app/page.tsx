import PatientsGraph from "@/components/Chart/PatientsGraph";
import WelcomeMessage from "@/components/WelcomeMessage";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
    {/* Welcome Section */}
    <WelcomeMessage/>

      {/* Stats Section */}
      <div className="flex justify-around gap-6 p-4 w-full mt-6 ml-6">
        {/** Appointments */}
        <div className="w-64 h-32 flex flex-col items-center justify-center bg-[#cb98eb] text-white text-xl font-semibold rounded-2xl shadow-xl">
          <p className="text-lg">Appointments</p>
          <span className="text-3xl font-bold">25</span>
        </div>

        {/** Upcoming Appointments */}
        <div className="w-64 h-32 flex flex-col items-center justify-center bg-[#e0e3a3] text-gray-800 text-xl font-semibold rounded-2xl shadow-xl">
          <p className="text-lg">Upcoming</p>
          <span className="text-3xl font-bold">10</span>
        </div>

        {/** Completed Appointments */}
        <div className="w-64 h-32 flex flex-col items-center justify-center bg-[#b9e3a3] text-gray-800 text-xl font-semibold rounded-2xl shadow-xl">
          <p className="text-lg">Completed</p>
          <span className="text-3xl font-bold">120</span>
        </div>

        {/** Cancelled Appointments */}
        <div className="w-64 h-32 flex flex-col items-center justify-center bg-[#db86b6] text-white text-xl font-semibold rounded-2xl shadow-xl">
          <p className="text-lg">Cancelled</p>
          <span className="text-3xl font-bold">8</span>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <PatientsGraph/>
      </div>

      </main>
  );
}
