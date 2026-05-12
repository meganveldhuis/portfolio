import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../../data/projects.json";
import "./ProjectPage.scss";

const CONTEXT_LABELS = {
  "BrainStation Capstone": { label: "School", type: "school" },
  "University of Alberta Capstone": { label: "School", type: "school" },
  "Personal Project": { label: "Personal", type: "personal" },
  Work: { label: "Work", type: "work" },
  "Project at BBM": { label: "Work", type: "work" },
};

function getContextMeta(context) {
  return CONTEXT_LABELS[context] || { label: context, type: "personal" };
}

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);
  const imageList = useMemo(() => {
    if (!project) {
      return [];
    }

    return [project.img, ...(project.photos || [])].filter(Boolean);
  }, [project]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) {
    return (
      <div className="project-page project-page--not-found">
        <button className="project-page__back" onClick={() => navigate("/")}>
          ← Back
        </button>
        <p>Project not found.</p>
      </div>
    );
  }

  const contextMeta = getContextMeta(project.context);
  const hasMultipleImages = imageList.length > 1;

  const goToPreviousImage = useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? imageList.length - 1 : currentIndex - 1,
    );
  }, [hasMultipleImages, imageList.length]);

  const goToNextImage = useCallback(() => {
    if (!hasMultipleImages) {
      return;
    }

    setActiveImageIndex(
      (currentIndex) => (currentIndex + 1) % imageList.length,
    );
  }, [hasMultipleImages, imageList.length]);

  const onCarouselTouchStart = (event) => {
    const [touch] = event.touches;
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const onCarouselTouchEnd = (event) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const [touch] = event.changedTouches;
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;
    const swipeThreshold = 40;

    touchStartX.current = null;
    touchStartY.current = null;

    if (
      Math.abs(deltaX) < swipeThreshold ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX > 0) {
      goToPreviousImage();
      return;
    }

    goToNextImage();
  };

  useEffect(() => {
    if (!hasMultipleImages) {
      return undefined;
    }

    const onWindowKeyDown = (event) => {
      const target = event.target;
      const isEditableTarget =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT");

      if (isEditableTarget) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPreviousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNextImage();
      }
    };

    window.addEventListener("keydown", onWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", onWindowKeyDown);
    };
  }, [goToNextImage, goToPreviousImage, hasMultipleImages]);

  return (
    <div className="project-page">
      {/* ── Header bar ── */}
      <header className="project-page__header">
        <button className="project-page__back" onClick={() => navigate("/")}>
          ← All projects
        </button>
        <span
          className={`project-page__context-badge project-page__context-badge--${contextMeta.type}`}
        >
          {contextMeta.label}
        </span>
      </header>

      {/* ── Editorial hero ── */}
      <section className="project-page__hero">
        <div className="project-page__hero-text">
          <p className="project-page__overline">{project.context}</p>
          <h1 className="project-page__title">{project.title}</h1>
          {project.startDate && (
            <p className="project-page__date">
              {project.startDate}
              {project.endDate ? ` — ${project.endDate}` : " — present"}
            </p>
          )}
        </div>

        {/* Decorative index number */}
        <span className="project-page__index-num" aria-hidden="true">
          {String(projects.findIndex((p) => p.id === project.id) + 1).padStart(
            2,
            "0",
          )}
        </span>
      </section>

      {/* ── Hero image carousel ── */}
      {imageList.length > 0 && (
        <div
          className="project-page__img-wrap"
          onTouchStart={onCarouselTouchStart}
          onTouchEnd={onCarouselTouchEnd}
        >
          <img
            className="project-page__img"
            src={imageList[activeImageIndex]}
            alt={`${project.title} image ${activeImageIndex + 1}`}
          />

          {project.position && (
            <div className="project-page__img-caption">{project.position}</div>
          )}

          {hasMultipleImages && (
            <>
              <button
                className="project-page__carousel-nav project-page__carousel-nav--prev"
                type="button"
                onClick={goToPreviousImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="project-page__carousel-nav project-page__carousel-nav--next"
                type="button"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                ›
              </button>

              <div
                className="project-page__carousel-dots"
                aria-label="Image selector"
              >
                {imageList.map((_, imageIndex) => (
                  <button
                    key={imageIndex}
                    className={`project-page__carousel-dot ${
                      imageIndex === activeImageIndex
                        ? "project-page__carousel-dot--active"
                        : ""
                    }`}
                    type="button"
                    aria-label={`Go to image ${imageIndex + 1}`}
                    onClick={() => setActiveImageIndex(imageIndex)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Body grid ── */}
      <div className="project-page__body">
        {/* About column */}
        <div className="project-page__col project-page__col--main">
          <h2 className="project-page__section-label">About</h2>
          <p className="project-page__description">{project.description}</p>

          {project.link && (
            <a
              href={project.link}
              className="project-page__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View on GitHub</span>
              <svg
                width="16"
                height="16"
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
            </a>
          )}
        </div>

        {/* Side column */}
        <aside className="project-page__col project-page__col--side">
          {/* Tech stack */}
          <div className="project-page__side-block">
            <h2 className="project-page__section-label">Tech stack</h2>
            <ul className="project-page__tech-list">
              {project.techStack.map((tech, i) => (
                <li className="project-page__tech-item" key={i}>
                  <span className="project-page__tech-dot" aria-hidden="true" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Role */}
          {project.position && (
            <div className="project-page__side-block">
              <h2 className="project-page__section-label">Role</h2>
              <p className="project-page__side-value">{project.position}</p>
            </div>
          )}
        </aside>
      </div>

      {/* ── Challenges & learnings ── */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="project-page__challenges">
          <div className="project-page__challenges-inner">
            <h2 className="project-page__section-label">
              Challenges &amp; learnings
            </h2>
            <ul className="project-page__challenge-list">
              {project.challenges.map((c, i) => (
                <li className="project-page__challenge-item" key={i}>
                  <span
                    className="project-page__challenge-num"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p>{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Footer nav ── */}
      <footer className="project-page__footer">
        <button className="project-page__back" onClick={() => navigate("/")}>
          ← Back to all projects
        </button>
      </footer>
    </div>
  );
}

export default ProjectPage;
