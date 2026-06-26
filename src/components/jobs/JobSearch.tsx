import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function JobSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative mb-8">

      <Search
        size={20}
        className="absolute left-4 top-4 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Government Jobs..."
        className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
      />

    </div>
  );
}