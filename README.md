# Florin-Traian Zadorojneac — Portfolio

A personal portfolio website built with React and Vite. It presents my projects, technical skills, CV and contact information in a clean, responsive landing page.

Live demo: [florinzadorojneac.vercel.app](https://florinzadorojneac.vercel.app/)

## Features

* Hero section — short introduction, main role and call-to-action buttons.
* About section — brief personal background and focus as a junior software developer.
* Projects section — showcases selected portfolio projects with descriptions, technologies and live/demo links.
* Skills section — highlights the main technologies and tools used.
* CV download — provides a downloadable PDF version of my CV.
* Contact links — quick access to email, GitHub and LinkedIn.
* Responsive design — works across desktop, tablet and mobile screen sizes.

## Tech stack

* Frontend: React
* Build tool: Vite
* Styling: CSS
* Deployment: Vercel

## Architecture

The project is structured as a single-page React application. Each major section of the website is separated into reusable components, such as `Hero`, `About`, `Projects`, `Skills` and `Footer`.

Project information is stored separately in `src/data/projects.js`, making it easy to add, remove or update projects without changing the main component structure.

Vite is used for fast development, local preview and production builds. The final static files are generated in the `dist/` folder and deployed through Vercel.

## Running locally

Requires Node.js and npm.

```bash
# 1. install dependencies
npm install

# 2. start the development server
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for production

```bash
npm run build
```

The production-ready static files will be generated in the `dist/` folder.

## Project structure

```text
.
├── public/
│   └── cv.pdf              # Downloadable CV
├── src/
│   ├── components/         # Main website sections
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Nav.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projects.js     # Project list and project details
│   ├── App.jsx             # Main app layout
│   ├── main.jsx            # React entry point
│   └── styles.css          # Main styling
├── index.html
├── package.json
└── vite.config.js
```

## Roadmap / possible improvements

* Add more projects as they are completed.
* Add screenshots or short previews for each project.
* Add project filtering by technology.
* Improve animations and page transitions.
* Add a dedicated contact form.

## Author

Florin-Traian Zadorojneac — Junior software developer.

* Portfolio: [florinzadorojneac.vercel.app](https://florinzadorojneac.vercel.app/)
* GitHub: [github.com/zdrj1337](https://github.com/zdrj1337)
