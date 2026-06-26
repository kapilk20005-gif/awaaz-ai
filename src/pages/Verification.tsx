import UploadBox from "../components/verification/UploadBox";
import VerificationResult from "../components/verification/VerificationResult";

export default function Verification() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Document Verification
      </h1>

      <UploadBox />

      <VerificationResult />
    </div>
  );
}