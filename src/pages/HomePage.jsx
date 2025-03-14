import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import Hero from "../components/Hero/Hero";
import ProjectSection from "../components/ProjectSection/ProjectSection";

function HomePage() {
  return (
    <div className="page-content">
      <Hero />
      <ExperienceSection />
      <ProjectSection />
    </div>
  );
}

export default HomePage;
