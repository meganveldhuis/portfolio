import "./ProjectTile.scss";
import photo from "../../../public/images/reflowOven.png";

function ProjectTile({ project }) {
  return (
    <li className="project" key={project.id}>
      {/* https://www.youtube.com/watch?v=NWG1Ygt1k1k&ab_channel=WebStylePress */}
      <img className="project__img" src={photo} alt={project.img} />
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
      <a className="project__link" href={project.link}>
        {project.link}
      </a>
    </li>
  );
}
export default ProjectTile;
