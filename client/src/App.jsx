import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import NowSection from "./components/sections/NowSection";
import F1Showcase from "./components/sections/F1Showcase";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <F1Showcase />
      <NowSection />
      <footer className="site-footer">
        <p>{portfolio.footerNote}</p>
        <div className="footer-links">
          {portfolio.socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
