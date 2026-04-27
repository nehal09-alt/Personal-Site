import { portfolio } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h3>Tools I use to learn fast, build reliably, and ship cleaner work.</h3>
      </div>
      <div className="grid skills-grid">
        {portfolio.skillGroups.map((group) => (
          <div className="card" key={group.title}>
            <h4>{group.title}</h4>
            <p>{group.description}</p>
            <div className="tags">
              {group.tools.map((tool) => (
                <span key={`${group.title}-${tool}`}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
