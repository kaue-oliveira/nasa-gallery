# NasaGallery 🌌

A responsive web application that fetches and displays stunning images from NASA's public APIs.  
Built as part of **Challenge 1** for **Zetta Lab**, demonstrating skills in React, TypeScript, Bootstrap, and SASS/SCSS.

---

## Features

- **APOD (Astronomy Picture of the Day)** – displays NASA’s daily astronomy image.
- **Random Image** – shows a random image from NASA’s APOD API.
- **Favorites** – allows users to save their favorite images locally using `localStorage`.
- **Earth Photos** – displays random satellite images of Earth using NASA’s EPIC API.
- **About** – information about the project and its purpose.

---

## Technologies

- **React + TypeScript**
- **React Router v6**
- **Bootstrap 5**
- **SASS/SCSS**
- **Vite** for development and build
- **NASA Public APIs** (APOD & EPIC)

---

## Installation

1. Clone the repository:

git clone https://github.com/kaue-oliveira/nasa-gallery.git
cd nasa-gallery

2. Intall dependencies:
npm install

3. Add your NASA API key:
VITE_NASA_API_KEY=YOUR_NASA_API_KEY

4. Run the development server:
npm run dev

Project Structure:
nasa-gallery/
├─ src/
│  ├─ api/          # Functions to fetch data from NASA APIs
|  ├─ assets/
│  ├─ components/   # Navbar, Footer, ImageCard
│  ├─ pages/        # Home, Random, Favorites, Earth, About
│  ├─ styles/       # main.scss
│  └─ App.tsx       # Routes and main app layout
├─ public/
├─ package.json
└─ README.md

