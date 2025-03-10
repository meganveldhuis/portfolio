import "./Hero.scss";
import githubLogo from "../../assets/github_logo.svg";
import linkedInLogo from "../../assets/linkedin_logo.svg";
import emailLogo from "../../assets/email_logo.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__top">
        <p className="hero__text hero__over-title">Hey, I'm</p>
        <h1 className="hero__text hero__name">Megan Veldhuis</h1>
        <p className="hero__text hero__subtitle">
          I am an analytical, energetic, and detail-oriented electrical
          engineering graduate, with a stubborn determination for what I am
          passionate about. I have experience in leadership roles and work well
          on teams, demonstrated by being an executive in Engineering Student
          Society and Diversity in Engineering. Being on the DivE team for most
          of my degree, I have learned how essential diversity is for every
          team. I am perceptive, attentive, and driven to meet deadlines and to
          produce high-quality work.
        </p>
      </div>
      <div className="hero__contact">
        <a href="mailto:megan.veldhuis@gmail.com" className="gradient-box">
          <button className="hero__button">
            <img src={emailLogo} />
            Send me an email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/megan-veldhuis/"
          className="gradient-box"
        >
          <button className="hero__button">
            <img src={linkedInLogo} />
            Connect on LinkedIn
          </button>
        </a>
        <a href="https://github.com/meganveldhuis" className="gradient-box">
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
