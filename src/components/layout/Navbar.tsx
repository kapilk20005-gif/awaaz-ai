import { Link } from "react-router-dom";
import {
  Home,
  FileText,
  Briefcase,
  Landmark,
  Bot,
  Bell,
} from "lucide-react";



export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 mb-8">

      {/* Logo */}
      <h2 className="text-2xl font-bold text-blue-400">
        AWAAZ AI
      </h2>

      {/* Menu */}
      <div className="flex items-center gap-6">

        <Link
          to="/home"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Home size={18} />
          Home
        </Link>

        <Link
          to="/documents"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <FileText size={18} />
          Documents
        </Link>

        <Link
          to="/jobs"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Briefcase size={18} />
          Jobs
        </Link>

        <Link
          to="/schemes"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Landmark size={18} />
          Schemes
        </Link>

        <Link
          to="/ai"
          className="flex items-center gap-2 hover:text-blue-400"
        >
          <Bot size={18} />
          AI Assistant
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <button className="bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-slate-700">
          <Bell size={18} />
          Notifications
        </button>

        <div className="flex items-center gap-3 bg-slate-800 px-4 py-2 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            K
          </div>

          <div>
            <p className="font-semibold">
              Kapil Kumar
            </p>

            <p className="text-xs text-slate-400">
              Citizen User
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}