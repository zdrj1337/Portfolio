export const projects = [
  {
    id: '01',
    name: 'SyncLogistics',
    role: 'Full-stack warehouse management system',
    description:
      'A full-stack web application for warehouse operations, covering inventory, inbound and outbound orders, suppliers, and customers. Implements CRUD workflows, a REST JSON API, and persistent SQLite data storage, with an HTML, CSS, and JavaScript frontend.',
    tags: ['Python', 'Flask', 'SQLite', 'REST API', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://synclogistics.pythonanywhere.com/',
    code: 'https://github.com/zdrj1337/SyncLogistics',
  },
  {
    id: '02',
    name: 'Fleet Payment Report Generator',
    role: 'Data processing pipeline + web application',
    description:
      "A web application that processes Bolt and Uber driver data exports, normalizes different input formats into a common structure, calculates individual driver payments, and generates PDF payment slips and Excel reports, including a fleet-wide summary. Built around a real ride-hailing fleet's workflow.",
    tags: ['Python', 'Flask', 'pandas', 'openpyxl', 'reportlab'],
    demo: 'https://fleetreports.pythonanywhere.com/',
    code: 'https://github.com/zdrj1337/FleetReports',
  },
]