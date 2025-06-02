import "./ProjectTile.scss";
import linkImage from "../../assets/logos/link.svg";

function ProjectTile({ project }) {
  return (
    <li className="project" key={project.id}>
      <img className="project__img" src={project.img} alt={project.img} />
      <h3 className="project__title">{project.title}</h3>
      <p className="project__context">{project.context}</p>
      {project.startDate ? (
        <p>
          {project.startDate} - {project.endDate ? project.endDate : "present"}
        </p>
      ) : (
        <></>
      )}
      <p className="project__description">{project.description}</p>
      <ul className="project__techstack">
        {project.techStack.map((tech, index) => (
          <div key={index}>
            {index == 0 ? <></> : <li>-</li>}
            <li className="project__tech-item" key={index}>
              {tech}
            </li>
          </div>
        ))}
      </ul>
      {project.link ? (
        <a
          href={project.link}
          className="gradient-box gradient-box--blue project__button"
        >
          <button className="project__link">
            <img src={linkImage} />
            View Project on GitHub
          </button>
        </a>
      ) : (
        <></>
      )}
    </li>
  );
}
export default ProjectTile;
