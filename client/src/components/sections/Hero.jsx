import { lazy, Suspense, useEffect, useState } from "react";
import { portfolio } from "../../data/portfolio";

const HeroScene = lazy(() => import("../three/HeroScene"));
const HERO_SLIDE_MS = 1400;

const slides = [
  { src: "/assets/images/f1-car-1.jpg", accent: "#f97316", label: "Race-inspired interfaces" },
  { src: "/assets/images/f1-car-2.jpg", accent: "#9b59ff", label: "Fast visual systems" },
  { src: "/assets/images/f1-car-3.jpg", accent: "#38bdf8", label: "Clean performance-driven UX" },
  { src: "/assets/images/f1-car-4.jpg", accent: "#ef4444", label: "High-energy racing visuals" },
  { src: "/assets/images/f1-car-5.jpg", accent: "#14b8a6", label: "Sharper motion-driven storytelling" },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const image = new Image();
      image.src = slide.src;
    });

    const intervalId = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, HERO_SLIDE_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="hero">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={`F1 showcase slide ${index + 1}`}
          className={`f1-slide ${active === index ? "active speed-flash" : ""}`}
        />
      ))}
      <div className="hero-color-tint" style={{ backgroundColor: slides[active].accent }} />
      <div className="hero-gradient-overlay" />
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="hero-grid-lines" />
      <div className="hero-content hero-shell">
        <p className="eyebrow">AI/ML portfolio</p>
        <h1 className="hero-title">{portfolio.name}</h1>
        <h2>{portfolio.role}</h2>
        <p className="hero-copy">{portfolio.intro}</p>
        <div className="cta-row hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore Projects
          </a>
          <a href={portfolio.github} className="btn btn-secondary" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
        <div className="hero-stats">
          {portfolio.highlights.map((item) => (
            <div key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-marquee">
          {slides.map((slide) => (
            <span key={slide.src}>{slide.label}</span>
          ))}
        </div>
      </div>
      <div className="slide-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`slide-dot ${active === index ? "active" : ""}`}
            onClick={() => setActive(index)}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="hero-timer" aria-hidden="true">
        <span
          key={active}
          className="hero-timer-bar"
          style={{ animationDuration: `${HERO_SLIDE_MS}ms` }}
        />
      </div>
    </section>
  );
};

export default Hero;
