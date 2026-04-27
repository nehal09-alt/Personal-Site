import { useMemo, useState } from "react";
import { portfolio } from "../../data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const languages = useMemo(
    () => ["all", ...new Set(portfolio.projects.map((project) => project.language).filter(Boolean))],
    []
  );
  const shown = portfolio.projects.filter((project) => filter === "all" || project.language === filter);

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h3>Selected work from GitHub, presented without any backend dependency.</h3>
      </div>
      <div className="tags project-filters">
        {languages.map((language) => (
          <button
            key={language}
            type="button"
            className={filter === language ? "is-active" : ""}
            onClick={() => setFilter(language)}
          >
            {language}
          </button>
        ))}
      </div>
      <div className="grid project-grid">
        {shown.map((project) => (
          <article className="card project-card" key={project.repo}>
            <div className="project-topline">
              <span>{project.language}</span>
              <span>{project.year}</span>
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={`${project.name}-${tag}`}>{tag}</span>
              ))}
            </div>
            <div className="cta-row">
              <a href={project.repo} target="_blank" rel="noreferrer">
                View Repository
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
