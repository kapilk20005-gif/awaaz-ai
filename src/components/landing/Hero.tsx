export default function Hero() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-6xl font-bold">
        Your AI Powered
        <span className="text-blue-500"> Citizen Readiness Assistant</span>
      </h1>

      <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-xl">
        Upload documents, discover government schemes, check eligibility,
        and get AI-powered guidance.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700">
          Get Started
        </button>

        <button className="border border-slate-700 px-8 py-4 rounded-xl">
          Watch Demo
        </button>
      </div>
    </section>
  );
}