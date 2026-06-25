export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand"><span className="dot"></span>florin.zadorojneac</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="/cv.pdf" className="nav-cta" download>Download CV</a>
        </div>
      </div>
    </nav>
  )
}
