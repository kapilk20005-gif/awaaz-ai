import { useState } from "react";
import JobSearch from "../components/jobs/JobSearch";
import JobCard from "../components/jobs/JobCard";

export default function Jobs() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <JobSearch value={search} onChange={setSearch} />
      <JobCard
        title="Software Engineer"
        department="Engineering"
        qualification="B.Tech / BE"
        lastDate="2026-08-15"
      />
    </div>
  );
}