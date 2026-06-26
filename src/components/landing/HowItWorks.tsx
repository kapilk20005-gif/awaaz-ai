const steps = [
  "Upload Documents",
  "Detect Missing Documents",
  "Check Eligibility",
  "AI Guidance",
  "Citizen Ready",
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={step}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl text-blue-500 font-bold mb-4">
              {index + 1}
            </div>

            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}