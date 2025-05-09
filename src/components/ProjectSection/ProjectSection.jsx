import "./ProjectSection.scss";
import projects from "../../data/projects.json";
import ProjectTile from "../ProjectTile/ProjectTile";

function ProjectSection() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__header">FEATURED PROJECTS</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectTile project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
}
export default ProjectSection;
