import {
  FileText,
  ShieldCheck,
  Bot,
  GraduationCap,
  Briefcase,
  Landmark,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Document Readiness",
      icon: <FileText size={32} />,
      desc: "Check which documents you already have and which are missing.",
    },
    {
      title: "AI Assistant",
      icon: <Bot size={32} />,
      desc: "Get personalized guidance for documents and schemes.",
    },
    {
      title: "Government Schemes",
      icon: <Landmark size={32} />,
      desc: "Discover schemes you are eligible for.",
    },
    {
      title: "Scholarship Readiness",
      icon: <GraduationCap size={32} />,
      desc: "Know what documents are required for scholarships.",
    },
    {
      title: "Job Readiness",
      icon: <Briefcase size={32} />,
      desc: "Prepare documents for private and government jobs.",
    },
    {
      title: "Verification",
      icon: <ShieldCheck size={32} />,
      desc: "Check document completeness and validity.",
    },
  ];
  {/* How It Works */
<section className="max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-12">
    How It Works
  </h2>

  <div className="grid md:grid-cols-5 gap-6">
    {[
      "Upload Documents",
      "Detect Missing Documents",
      "Check Scheme Eligibility",
      "Get AI Guidance",
      "Become Citizen Ready",
    ].map((step, index) => (
      <div
        key={step}
        className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center"
      >
        <div className="text-3xl font-bold text-blue-500 mb-3">
          {index + 1}
        </div>
        <p>{step}</p>
      </div>
    ))}
  </div>
</section>
  }
<section className="max-w-6xl mx-auto py-20 px-6">
  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
    <h2 className="text-4xl font-bold mb-6">
      AI Document Verification
    </h2>

    <div className="space-y-3 text-slate-300">
      <p>✓ OCR Extraction</p>
      <p>✓ Document Format Validation</p>
      <p>✓ Required Fields Check</p>
      <p>✓ QR Detection</p>
      <p>✓ Authenticity Indicators</p>
    </div>

    <div className="mt-6 bg-green-600 inline-block px-4 py-2 rounded-xl">
      Verification Confidence: 92%
    </div>
  </div>
</section>
  

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-blue-500">
          AWAAZ AI
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-lg border border-slate-700"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-lg bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Your AI Powered
          <span className="text-blue-500">
            {" "}Citizen Readiness Assistant
          </span>
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl mx-auto mt-6">
          Identify missing documents, discover government schemes,
          receive AI guidance, and become ready for education,
          employment, and public services.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-600 px-8 py-3 rounded-xl"
          >
            Get Started
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-slate-700 px-8 py-3 rounded-xl"
          >
            Watch Demo
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {[
          "50+ Documents",
          "100+ Schemes",
          "AI Powered",
          "Hindi + English",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center"
          >
            <h2 className="text-2xl font-bold">{item}</h2>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-12 rounded-3xl text-center">
    <h2 className="text-5xl font-bold">
      Start Your Citizen Readiness Journey
    </h2>

    <button
      onClick={() => navigate("/dashboard")}
      className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold"
    >
      Launch AWAAZ AI
    </button>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-500">
        © 2026 AWAAZ AI — Citizen Readiness Platform
      </footer>
    </div>
  );
}