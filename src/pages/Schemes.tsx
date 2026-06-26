import Sidebar from "../components/layout/Sidebar";

export default function Schemes() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-white min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-8">
          Scheme Eligibility Checker
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="number"
              placeholder="Age"
              className="p-3 rounded-lg bg-slate-800"
            />

            <select className="p-3 rounded-lg bg-slate-800">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              type="text"
              placeholder="State"
              className="p-3 rounded-lg bg-slate-800"
            />

            <input
              type="text"
              placeholder="Occupation"
              className="p-3 rounded-lg bg-slate-800"
            />

            <input
              type="number"
              placeholder="Annual Income"
              className="p-3 rounded-lg bg-slate-800"
            />
          </div>

          <button className="mt-6 bg-blue-600 px-6 py-3 rounded-xl">
            Check Eligibility
          </button>
        </div>

        <div className="mt-8 bg-slate-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            Eligible Schemes
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              PM Awas Yojana
            </div>

            <div className="bg-slate-800 p-4 rounded-lg">
              National Scholarship Scheme
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}