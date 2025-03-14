import "./ExperienceSection.scss";
import { useState, useEffect } from "react";
import jobs from "../../data/jobs.json";
import JobDescription from "../JobDescription/JobDescription";

function ExperienceSection() {
  const [selectedCompanyID, setSelectedCompanyID] = useState(0);

  function handleCompanyClick(e) {
    setSelectedCompanyID(e.target.id);
  }

  return (
    <section className="experience">
      <h2 className="experience__header">Experience</h2>
      <div className="experience__content">
        <nav className="experience__nav">
          {jobs.map((job) => (
            <option
              className={`experience__option ${
                selectedCompanyID == job.id
                  ? "experience__option--selected"
                  : ""
              } ${job.isVolunteer ? "experience__option--volunteer" : ""}`}
              id={job.id}
              onClick={handleCompanyClick}
              key={job.id}
            >
              {job.company}
            </option>
          ))}
        </nav>
        <div className="experience__job">
          <JobDescription selectedCompany={jobs[selectedCompanyID]} />
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;
