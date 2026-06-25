export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="status">// junior software developer · <b>Galați, RO</b> · open to work</div>
        <h1>Florin-Traian<br />Zadorojneac</h1>
        <p className="lead">I build practical web apps that solve real operational problems.</p>
        <p className="intro">Third-year Automation &amp; Applied Informatics student, focused on becoming a software developer. I work mostly with Python and Flask. Both projects below are live, and the code is on GitHub.</p>
        <div className="cta-row">
          <a href="#projects" className="btn btn-primary">View projects <span className="arr">↓</span></a>
          <a href="https://github.com/zdrj1337" className="btn btn-outline" target="_blank" rel="noopener">GitHub <span className="arr">↗</span></a>
        </div>
      </div>
    </header>
  )
}
