import "./ProjectTile.scss";
import { useNavigate } from "react-router-dom";

const ACCENT_COLORS = {
  "BrainStation Capstone": { from: "#378ADD", to: "#b56576" },
  "University of Alberta Capstone": { from: "#639922", to: "#1D9E75" },
  "Personal Project": { from: "#BA7517", to: "#D4537E" },
  Work: { from: "#b56576", to: "#6d597a" },
};

const CONTEXT_TYPE = {
  "BrainStation Capstone": "school",
  "University of Alberta Capstone": "school",
  "Personal Project": "personal",
  Work: "work",
};

function getAccent(context) {
  return ACCENT_COLORS[context] || { from: "#b56576", to: "#6d597a" };
}

function ProjectTile({ project }) {
  const navigate = useNavigate();
  const accent = getAccent(project.context);
  const contextType = CONTEXT_TYPE[project.context] || "personal";

  const handleClick = () => navigate(`/projects/${project.id}`);

  return (
    <li
      className="project-tile"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`View ${project.title} project`}
    >
      <div
        className="project-tile__accent"
        style={{
          background: `linear-gradient(90deg, ${accent.from}, ${accent.to})`,
        }}
      />

      {project.img && (
        <div className="project-tile__img-wrap">
          <img
            className="project-tile__img"
            src={project.img}
            alt={project.title}
          />
          {/* these images are saved in the /public/images folder */}
        </div>
      )}

      <div className="project-tile__body">
        <p
          className={`project-tile__context project-tile__context--${contextType}`}
        >
          {project.context}
        </p>

        <h3 className="project-tile__title">{project.title}</h3>

        {project.startDate && (
          <p className="project-tile__date">
            {project.startDate}
            {project.endDate ? ` — ${project.endDate}` : " — present"}
          </p>
        )}

        <p className="project-tile__description">{project.bio}</p>

        <ul className="project-tile__techstack">
          {project.techStack.map((tech, index) => (
            <li className="project-tile__tech-item" key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-tile__footer">
        <span className="project-tile__cta">
          View project
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 13L13 3M13 3H6M13 3V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </li>
  );
}
export default ProjectTile;
