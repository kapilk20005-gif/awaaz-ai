import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />
    <div className="flex-1 p-8 text-white">
      <Navbar />

      <div className="flex-1 p-8 text-white">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your documents, schemes and readiness score.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-2xl shadow-lg">
            <h3 className="text-sm opacity-80">
              Readiness Score
            </h3>

            <p className="text-5xl font-bold mt-3">
              78%
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-slate-400">
              Documents
            </h3>

            <p className="text-5xl font-bold mt-3">
              8/12
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-slate-400">
              Eligible Schemes
            </h3>

            <p className="text-5xl font-bold mt-3 text-green-400">
              4
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-slate-400">
              Missing Documents
            </h3>

            <p className="text-5xl font-bold mt-3 text-red-400">
              4
            </p>
          </div>
        </div>

        {/* Readiness Score */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Citizen Readiness Score
          </h2>

          <div className="w-full bg-slate-700 rounded-full h-5">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-5 rounded-full"
              style={{ width: "78%" }}
            ></div>
          </div>

          <p className="mt-4 text-slate-400">
            You are 78% ready for education,
            government services and employment.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">
              Upload Documents
            </h3>

            <p className="text-slate-400">
              Add Aadhaar, PAN and certificates.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">
              Check Schemes
            </h3>

            <p className="text-slate-400">
              Discover government benefits.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">
              AI Assistant
            </h3>

            <p className="text-slate-400">
              Ask document related questions.
            </p>
          </div>
          //Recent Activity
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mt-8">
  <h2 className="text-2xl font-bold mb-4">
    Recent Activity
  </h2>

  <div className="space-y-3">
    <div className="bg-slate-800 p-4 rounded-xl">
      Aadhaar Card uploaded successfully
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      New scheme eligibility found
    </div>

    <div className="bg-slate-800 p-4 rounded-xl">
      Readiness score increased to 78%
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    </div>
  );
}