export default function VerificationResult() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Verification Result
      </h2>

      <p>✔ OCR Extracted</p>
      <p>✔ QR Code Detected</p>
      <p>✔ Aadhaar Format Valid</p>

      <div className="mt-4 text-green-400 font-bold">
        Status : Genuine
      </div>
    </div>
  );
}