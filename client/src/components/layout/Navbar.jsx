import { useState } from "react";

const links = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["f1", "F1"],
  ["journey", "Journey"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <a href="#hero" className="brand">
        <span>Md Nehal Khurshid</span>
      </a>
      <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        Menu
      </button>
      <nav className={`nav ${open ? "open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
