import "./ProjectTile.scss";

function ProjectTile({ project }) {
  return (
    <li className="project" key={project.id}>
      <img className="project__img" />
      <h3 className="project__title">{project.title}</h3>
      <p className="project__description">{project.description}</p>
      <a href={project.link}>{project.link}</a>
      <p>{project.context}</p>
      <p>
        {project.startDate} - {project.endDate}
      </p>
      <ul className="project__techstack">
        {project.techStack.map((tech, index) => (
          <li className="project__tech-item" key={index}>
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}
export default ProjectTile;
