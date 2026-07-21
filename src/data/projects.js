export const projects = [
  {
    id: '01',
    name: 'SyncLogistics',
    role: 'Warehouse management system',
    description:
      'A Flask web application for running a warehouse: tracking stock, recording inbound and outbound movements, and keeping inventory in sync, backed by a SQLite database. A full CRUD app with a clean interface, built to model how a real warehouse keeps its operations organized.',
    tags: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    demo: 'https://synclogistics.pythonanywhere.com/',
    code: 'https://github.com/zdrj1337/SyncLogistics',
  },
  {
    id: '02',
    name: 'Fleet Payment Report Generator',
    role: 'Data pipeline + web app',
    description:
      "Bolt and Uber export weekly driver data in completely different formats. This app normalizes both into one schema, calculates each driver's pay (platform and firm commission, net, bank transfer), and generates a PDF payment slip and an Excel report per driver — plus a fleet-wide summary. Built around a real ride-hailing fleet's workflow.",
    tags: ['Python', 'Flask', 'pandas', 'openpyxl', 'reportlab'],
    demo: 'https://fleetreports.pythonanywhere.com/',
    code: 'https://github.com/zdrj1337/FleetReports',
  },
]