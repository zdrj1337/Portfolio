const groups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C++', 'SQL'] },
  { title: 'Web', items: ['HTML', 'CSS', 'Flask', 'React'] },
  { title: 'Data & libraries', items: ['pandas', 'openpyxl', 'reportlab', 'SQLite'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Skills</div>
          <h2>Tools I work with</h2>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <div className="g-title">{g.title}</div>
              <div className="chips">
                {g.items.map((it) => (
                  <span className="chip" key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
