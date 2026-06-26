import Sidebar from "../components/layout/Sidebar";

export default function Admin() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-white p-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">
          Admin Panel
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Total Users</h2>
            <p className="text-4xl font-bold">124</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Total Documents</h2>
            <p className="text-4xl font-bold">542</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h2>Total Schemes</h2>
            <p className="text-4xl font-bold">37</p>
          </div>
        </div>
      </div>
    </div>
  );
}