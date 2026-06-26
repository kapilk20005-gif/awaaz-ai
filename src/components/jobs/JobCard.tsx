import { Briefcase, CalendarDays, Building2 } from "lucide-react";

type Props = {
  title: string;
  department: string;
  qualification: string;
  lastDate: string;
};

export default function JobCard({
  title,
  department,
  qualification,
  lastDate,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">

      <div className="flex items-center gap-3 mb-4">
        <div className="bg-blue-600 p-3 rounded-xl">
          <Briefcase size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <p className="text-slate-400">
            {department}
          </p>
        </div>
      </div>

      <div className="space-y-3 text-sm">

        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-blue-400" />
          <span>{qualification}</span>
        </div>

        <div className="flex items-center gap-2">
          <CalendarDays size={18} className="text-red-400" />
          <span>{lastDate}</span>
        </div>

      </div>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold">
        Apply Now
      </button>

    </div>
  );
}