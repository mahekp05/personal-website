# 🌐 Mahek Patel — Personal Portfolio (Source)

This repository contains the source code for my personal portfolio website, built with React, TypeScript, and Vite. The site showcases my projects, experience, writing, and technical interests.

---

## 🔍 Live Site

Visit the portfolio at:

**https://www.mahek.dev**

The site is deployed using **Azure Static Web Apps**, which provides automated builds and global hosting directly from the GitHub repository.

---

## 🛠 Tech Stack

* **Vite** – fast build tooling and development server
* **React + TypeScript** – frontend application and UI components
* **CSS** – custom styling and responsive layouts
* **Azure Static Web Apps** – deployment, hosting, and CI/CD
* **GitHub** – source control and deployment integration

---

## 📁 Project Structure

* `app/` — main Vite + React application

  * `index.html` — application entry point
  * `package.json` — dependencies and npm scripts
  * `src/`

    * `components/` — reusable UI components
    * `pages/` — site pages
    * `data/` — portfolio content and project data
    * `styles/` — styling files
  * `public/` — static assets

Other root files:

* `README.md` — project documentation
* `.gitignore`

---

## 🚀 Deployment

The portfolio is automatically deployed through **Azure Static Web Apps**.

Whenever changes are pushed to the main branch, Azure builds the Vite application and publishes the latest version of the site.

Production URL:

**https://www.mahek.dev**

---

## 📦 Running Locally

From the repository root:

```bash
cd app
npm install
npm run dev
```

Common scripts:

* `npm run dev` — start the development server
* `npm run build` — create a production build
* `npm run preview` — preview the production build locally

---

## Contributing

This is a personal portfolio project, but feedback and suggestions are always welcome.

Most application code lives inside `app/src/`, including pages, components, content, and styling.
