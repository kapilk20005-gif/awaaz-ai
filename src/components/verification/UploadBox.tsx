export default function UploadBox() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
      <input
        type="file"
        className="w-full p-3 rounded-xl bg-slate-800"
      />

      <button className="mt-4 bg-blue-600 px-6 py-3 rounded-xl">
        Analyze Document
      </button>
    </div>
  );
}