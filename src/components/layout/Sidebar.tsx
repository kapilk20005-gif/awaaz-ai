import { Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 text-white">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold text-blue-500">
          AWAAZ AI
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Citizen Document Assistant
        </p>
      </div>

      <nav className="p-4 space-y-2">

        
        <Link
          to="/dashboard"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/documents"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          📁 Documents
        </Link>

        <Link
          to="/missing-docs"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          📋 Missing Documents
        </Link>

        <Link
          to="/verification"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          ✅ Verification
        </Link>

        <Link
          to="/schemes"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          🏛 Government Schemes
        </Link>

        <Link
          to="/ai-chat"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          🤖 AI Assistant
        </Link>

        <Link
          to="/profile"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          👤 Profile
        </Link>

        <Link
          to="/admin"
          className="block p-3 rounded-xl hover:bg-slate-800 transition"
        >
          ⚙️ Admin Panel
        </Link>
        
      </nav>
      
    </aside>
  );
}