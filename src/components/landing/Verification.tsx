export default function Verification() {
  return (
    <section className="py-20">
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-10">
        <h2 className="text-4xl font-bold mb-6">
          AI Verification
        </h2>

        <div className="space-y-3 text-slate-300">
          <p>✓ OCR Detection</p>
          <p>✓ QR Detection</p>
          <p>✓ AI Validation</p>
          <p>✓ Format Checking</p>
          <p>✓ Authenticity Score</p>
        </div>

        <div className="mt-6 inline-block bg-green-600 px-5 py-3 rounded-xl">
          Verification Confidence 92%
        </div>
      </div>
    </section>
  );
}