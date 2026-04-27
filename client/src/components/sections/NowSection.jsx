import { portfolio } from "../../data/portfolio";

const NowSection = () => (
  <section id="journey" className="section">
    <div className="section-heading">
      <p className="eyebrow">Journey</p>
      <h3>Where I am right now and what I am building toward.</h3>
    </div>
    <div className="grid journey-grid">
      <article className="card">
        <h4>Education</h4>
        <p>{portfolio.education.degree}</p>
        <p>{portfolio.education.school}</p>
        <p>{portfolio.education.period}</p>
      </article>
      <article className="card">
        <h4>Current Focus</h4>
        <p>{portfolio.currentFocus}</p>
      </article>
      <article className="card">
        <h4>Profiles</h4>
        <div className="footer-links">
          {portfolio.socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </article>
    </div>
  </section>
);

export default NowSection;
