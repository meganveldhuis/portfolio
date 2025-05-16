import "./JobDescription.scss";

function JobDescription({ selectedCompany }) {
  return (
    <article className="job">
      <div className="job__header">
        <h3 className="job__position">{selectedCompany.positionTitle}</h3>
        <h4 className="job__date">
          {selectedCompany.secondStart
            ? `${selectedCompany.start} - ${
                selectedCompany.end ? selectedCompany.end : "present"
              }, ${selectedCompany.secondStart} - ${
                selectedCompany.secondEnd
                  ? selectedCompany.secondEnd
                  : "present"
              }`
            : `${selectedCompany.start} - ${
                selectedCompany.end ? selectedCompany.end : "present"
              }`}
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
      {selectedCompany.associatedPrograms ? (
        <div className="job__info">
          <h4 className="job__title">Programs/Skills:</h4>
          <ul className="job__program-list">
            {selectedCompany.associatedPrograms.map((program, index) => (
              <li className="job__program">
                <p>{program}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </article>
  );
}
export default JobDescription;
