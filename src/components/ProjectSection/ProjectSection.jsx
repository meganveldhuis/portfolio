import projects from "../../data/projects.json";
import ProjectTile from "../ProjectTile/ProjectTile";

function ProjectSection() {
  return (
    <section>
      <h2>FEATURED PROJECTS</h2>
      <ul>
        {projects.map((project) => (
          <ProjectTile project={project} key={project.id} />
        ))}
      </ul>
    </section>
  );
}
export default ProjectSection;
