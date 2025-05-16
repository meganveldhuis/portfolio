import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import Hero from "../components/Hero/Hero";
import ProjectSection from "../components/ProjectSection/ProjectSection";

function HomePage() {
  return (
    <div className="page">
      <Hero />
      <div className="page__content">
        <ExperienceSection />
        <ProjectSection />
      </div>
    </div>
  );
}

export default HomePage;
