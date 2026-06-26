import Sidebar from "../components/layout/Sidebar";

export default function Profile() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-white p-8">
        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        <div className="bg-slate-900 p-6 rounded-xl">
          <p>Name: Kapil Kumar</p>
          <p>Education: BCA</p>
          <p>State: Rajasthan</p>
          <p>Email: user@example.com</p>
        </div>
      </div>
    </div>
  );
}