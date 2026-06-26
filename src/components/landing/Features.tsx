import {
  FileText,
  Bot,
  Landmark,
  GraduationCap,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Document Readiness",
    icon: FileText,
    desc: "Check available and missing documents.",
  },
  {
    title: "AI Assistant",
    icon: Bot,
    desc: "24×7 document guidance.",
  },
  {
    title: "Government Schemes",
    icon: Landmark,
    desc: "Find schemes you qualify for.",
  },
  {
    title: "Scholarship",
    icon: GraduationCap,
    desc: "Education readiness.",
  },
  {
    title: "Jobs",
    icon: Briefcase,
    desc: "Government & Private jobs.",
  },
  {
    title: "Verification",
    icon: ShieldCheck,
    desc: "AI document verification.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Core Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-blue-500 transition"
            >
              <Icon className="text-blue-500 mb-4" size={35} />

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}