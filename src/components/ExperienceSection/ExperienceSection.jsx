import "./ExperienceSection.scss";
import { useState, useEffect } from "react";
import jobs from "../../data/jobs.json";
import JobDescription from "../JobDescription/JobDescription";

function ExperienceSection() {
  const sortedJobs = [...jobs].sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );

  const [selectedCompanyID, setSelectedCompanyID] = useState(sortedJobs[0].id);

  function handleCompanyClick(e) {
    if (e.target.nodeName === "SELECT") {
      setSelectedCompanyID(e.target.value);
    } else {
      setSelectedCompanyID(e.target.id);
    }
  }

  return (
    <section className="experience">
      <h2 className="experience__header">Work Experience</h2>
      <div className="experience__content">
        <select
          className="experience__select"
          id="selectJob"
          name="selectJob"
          value={selectedCompanyID}
          onChange={handleCompanyClick}
        >
          {sortedJobs.map((job) => (
            <option
              className={`experience__option ${
                selectedCompanyID == job.id
                  ? "experience__option--selected"
                  : ""
              } ${job.isVolunteer ? "experience__option--volunteer" : ""}`}
              id={job.id}
              key={job.id}
              value={job.id}
            >
              {job.company}
            </option>
          ))}
        </select>
        <ul className="experience__nav">
          {sortedJobs.map((job) => (
            <li
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
            </li>
          ))}
        </ul>

        <div className="experience__job">
          <JobDescription
            selectedCompany={sortedJobs.find(
              (job) => job.id == selectedCompanyID
            )}
          />
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;
