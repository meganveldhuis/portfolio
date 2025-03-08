import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <p>Hey, I'm</p>
        <h1>Megan Veldhuis</h1>
        <p>
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
        <button>Send an email</button>
        <button>LinkedIn</button>
        <button>GitHub</button>
      </div>
    </div>
  );
}

export default Hero;
