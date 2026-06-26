const stats = [
  "50+ Documents",
  "100+ Schemes",
  "AI Powered",
  "Hindi + English",
];

export default function Stats() {
  return (
    <section className="grid md:grid-cols-4 gap-6 py-12">
      {stats.map((item) => (
        <div
          key={item}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center"
        >
          <h2 className="text-2xl font-bold">{item}</h2>
        </div>
      ))}
    </section>
  );
}