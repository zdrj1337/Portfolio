export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2>Let's work together</h2>
        <p className="sub">I'm looking for a junior software developer role. The fastest way to reach me is by email — I'd be glad to talk.</p>
        <div className="contact-links">
          <a href="mailto:florin.traian2004@yahoo.com" className="c-link"><span className="mono">@</span> florin.traian2004@yahoo.com</a>
          <a href="https://github.com/zdrj1337" className="c-link" target="_blank" rel="noopener"><span className="mono">{'{ }'}</span> github.com/zdrj1337</a>
          <a href="https://www.linkedin.com/in/florin-traian-zadorojneac-6325a93b7/" className="c-link" target="_blank" rel="noopener"><span className="mono">in</span> LinkedIn</a>
        </div>
      </div>
      <div className="foot-base">
        <span>© 2026 Florin-Traian Zadorojneac</span>
        <span>Built with React &amp; Vite</span>
      </div>
    </footer>
  )
}
