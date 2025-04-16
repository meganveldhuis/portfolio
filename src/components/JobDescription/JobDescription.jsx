import "./JobDescription.scss";

function JobDescription({ selectedCompany }) {
  return (
    <article className="job">
      <div className="job__header">
        <h3 className="job__position">{selectedCompany.positionTitle}</h3>
        <h4 className="job__date">
          {selectedCompany.secondStart
            ? `${selectedCompany.start} - ${selectedCompany.end}, ${
                selectedCompany.secondStart
              } - ${
                selectedCompany.secondEnd
                  ? selectedCompany.secondEnd
                  : "present"
              }`
            : `${selectedCompany.start} - ${selectedCompany.end}`}
        </h4>
      </div>
      <h4 className="job__location">{selectedCompany.location}</h4>
      <ul className="job__task-list">
        {selectedCompany.tasks.map((task, index) => (
          <li className="job__task" key={index}>
            {task}
          </li>
        ))}
      </ul>
    </article>
  );
}
export default JobDescription;
