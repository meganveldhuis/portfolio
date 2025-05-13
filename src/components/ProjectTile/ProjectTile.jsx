import "./ProjectTile.scss";
// import photo from "../../../public/images/reflowOven.png";

function ProjectTile({ project }) {
  return (
    <li className="project" key={project.id}>
      <img className="project__img" src={project.img} alt={project.img} />
      <h3 className="project__title">{project.title}</h3>
      <p className="project__context">{project.context}</p>
      <p>
        {project.startDate} - {project.endDate}
      </p>
      <p className="project__description">{project.description}</p>
      <ul className="project__techstack">
        {project.techStack.map((tech, index) => (
          <li className="project__tech-item" key={index}>
            {tech}
          </li>
        ))}
      </ul>
      <a
        href={project.link}
        className="gradient-box gradient-box--blue project__button"
      >
        <button className="project__link">View Project on GitHub</button>
      </a>
    </li>
  );
}
export default ProjectTile;
