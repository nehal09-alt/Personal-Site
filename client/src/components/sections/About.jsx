import { portfolio } from "../../data/portfolio";

const About = () => (
  <section id="about" className="section about">
    <div className="section-heading">
      <p className="eyebrow">About</p>
      <h3>Focused on practical AI, automation, and steady growth.</h3>
    </div>
    <div className="about-layout">
      <div className="about-copy card">
        <p>{portfolio.about}</p>
        <div className="about-meta">
          <div>
            <span className="meta-label">Location</span>
            <strong>{portfolio.location}</strong>
          </div>
          <div>
            <span className="meta-label">Education</span>
            <strong>{portfolio.education.degree}</strong>
          </div>
          <div>
            <span className="meta-label">University</span>
            <strong>{portfolio.education.school}</strong>
          </div>
          <div>
            <span className="meta-label">Years</span>
            <strong>{portfolio.education.period}</strong>
          </div>
        </div>
      </div>
      <div className="profile-card card">
        <img src="/assets/images/nehal-profile.jpg" alt="Md Nehal Khurshid profile" loading="lazy" />
        <div className="tags">
          {portfolio.focusAreas.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
