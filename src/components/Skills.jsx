const groups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'React', 'Node.js', 'Flask', 'REST APIs'],
  },
  {
    title: 'Data & libraries',
    items: ['SQL', 'SQLite', 'pandas', 'openpyxl', 'reportlab'],
  },
  {
    title: 'Tools & deployment',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Vercel', 'PythonAnywhere', 'Claude Code'],
  },
  {
    title: 'Engineering & automation',
    items: ['MATLAB', 'Simulink', 'PLC Fundamentals', 'Arduino', 'Control Systems'],
  },
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
