import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { requirements } from "../data/requirements";

export default function MissingDocs() {
  const [goal, setGoal] = useState("job");
  const [age, setAge] = useState(18);

  const userDocs = ["Aadhaar Card", "10th Marksheet"];

  const requiredDocs =
    requirements[goal as keyof typeof requirements] || [];

  const missingDocs = requiredDocs.filter(
    (doc) => !userDocs.includes(doc)
  );

  // ✅ FIXED FUNCTION (INSIDE COMPONENT)
  const eligibilityMessage = () => {
    if (goal === "job" && age < 18) {
      return "❌ You are not eligible for most jobs. Minimum age is 18.";
    }

    if (goal === "scholarship" && age < 16) {
      return "⚠️ Some scholarships may not apply for your age.";
    }

    if (goal === "college" && age < 17) {
      return "📚 You may need to complete school first.";
    }

    return "✅ You are eligible to proceed for this goal.";
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-950 text-white p-8 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">
          Missing Document Detector
        </h1>

        {/* ELIGIBILITY BOX */}
        <div className="bg-blue-950 p-6 rounded-xl mb-6">
          <h2 className="text-xl font-bold mb-2">
            Eligibility Status
          </h2>

          <p className="text-slate-300">
            {eligibilityMessage()}
          </p>
        </div>

        {/* GOAL SELECT */}
        <div className="mb-6">
          <label className="text-slate-400">Select Goal:</label>

          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="ml-3 p-2 bg-slate-900 border border-slate-700 rounded"
          >
            <option value="job">Job</option>
            <option value="scholarship">Scholarship</option>
            <option value="college">College</option>
            <option value="scheme">Government Scheme</option>
          </select>
        </div>

        {/* AGE INPUT */}
        <div className="mb-6">
          <label className="text-slate-400">Enter Age:</label>

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="ml-3 p-2 bg-slate-900 border border-slate-700 rounded w-24"
          />
        </div>

        {/* USER INFO */}
        <div className="bg-slate-900 p-6 rounded-xl mb-6">
          <h2 className="text-xl font-bold mb-2">
            User Info
          </h2>

          <p>Goal: {goal}</p>
          <p>Age: {age}</p>
        </div>

        {/* AVAILABLE DOCS */}
        <div className="bg-slate-900 p-6 rounded-xl mb-6">
          <h2 className="text-xl font-bold mb-3">
            Your Documents
          </h2>

          <p className="text-slate-300">
            {userDocs.join(", ")}
          </p>
        </div>

        {/* MISSING DOCS */}
        <div className="bg-slate-900 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-3 text-red-400">
            Missing Documents
          </h2>

          {missingDocs.length === 0 ? (
            <p className="text-green-400">
              All documents are complete 🎉
            </p>
          ) : (
            <ul className="list-disc ml-6 text-slate-300">
              {missingDocs.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}