import "./Hero.scss";
import githubLogo from "../../assets/logos/github_logo.svg";
import linkedInLogo from "../../assets/logos/linkedin_logo.svg";
import emailLogo from "../../assets/logos/email_logo.svg";

function Hero() {
  const name = "Megan Veldhuis";

  // Split the name into individual characters and wrap each in a span
  const animatedName = name
    .split("")
    .map((char, index) => (
      <span key={index}>{char === " " ? "\u00A0" : char}</span>
    ));
  return (
    <div className="hero">
      <div className="hero__top">
        <p className="hero__text hero__over-title">Hey, I'm</p>
        <h1 className="hero__text hero__name anim-text-flow">{animatedName}</h1>
        <p className="hero__text hero__subtitle">
          I am an analytical, energetic, and detail-oriented{" "}
          <span>electrical engineering</span> graduate, with a stubborn
          determination for what I am passionate about. I have experience in{" "}
          <span className="hero__subtitle">leadership</span> roles and work well
          on teams, demonstrated by being an executive in{" "}
          <span className="hero__subtitle">Engineering Students' Society</span>{" "}
          and <span className="hero__subtitle">Diversity in Engineering</span>.
          Being on the DivE team for most of my degree, I have learned how
          essential diversity is for every team. I am{" "}
          <span>perceptive, attentive</span>, and{" "}
          <span>driven to meet deadlines</span> and to{" "}
          <span>produce high-quality work</span>.
        </p>
      </div>
      <div className="hero__contact">
        <a
          href="mailto:megan.veldhuis@gmail.com"
          className="gradient-box gradient-box--blue"
        >
          <button className="hero__button">
            <img src={emailLogo} />
            Send me an email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/megan-veldhuis/"
          className="gradient-box gradient-box--purple"
        >
          <button className="hero__button">
            <img src={linkedInLogo} />
            Connect on LinkedIn
          </button>
        </a>
        <a
          href="https://github.com/meganveldhuis"
          className="gradient-box gradient-box--pink"
        >
          <button className="hero__button">
            <img src={githubLogo} />
            View my GitHub
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
