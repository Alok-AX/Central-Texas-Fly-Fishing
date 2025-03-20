# Central Texas Fly Fishing Website

A modern, responsive React website for Central Texas Fly Fishing, built with React 19 and Vite.

![Central Texas Fly Fishing](https://central-texas-fly-fishing-one.vercel.app/assets/footer-log-uTIjrrn8.png)

## Project Overview

This project is a responsive website for Central Texas Fly Fishing, featuring:

- Modern, clean UI design
- Responsive layout for all device sizes
- Bootstrap 5 integration for styling and components
- Component-based architecture

## Technology Stack

- **React**: v19.0.0
- **React DOM**: v19.0.0
- **Vite**: v6.2.0 (for fast development and optimized builds)
- **Bootstrap**: v5.3.3 (for responsive design and UI components)
- **ESLint**: v9.21.0 (for code quality)

## Project Structure

```
Task_react/
├── public/                # Static assets
│   ├── assets/            # Public assets
│   │   ├── images/        # Image assets
│   │   ├── css/           # CSS files
│   │   └── js/            # JavaScript files
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── assets/            # Source assets
│   │   └── react.svg      # React logo
│   ├── components/        # React components
│   │   ├── Navbar.jsx     # Navigation bar component
│   │   ├── Hero.jsx       # Hero section component
│   │   ├── Featured.jsx   # Featured options component
│   │   ├── MemberStories.jsx # Member stories component
│   │   └── Footer.jsx     # Footer component
│   ├── App.jsx            # Main application component
│   ├── App.css            # App-specific styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Components

### Navbar
- Responsive navigation bar with logo and menu items
- Mobile-friendly with collapsible menu

### Hero
- Main banner section with headline, description, and call-to-action
- Responsive layout with image

### Featured
- Accordion-style featured options section
- Different layouts for mobile and desktop views

### MemberStories
- Grid layout showcasing member stories
- Responsive design with different layouts for different screen sizes

### Footer
- Site footer with logo, navigation links, and social media icons
- Copyright information

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Task_react
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Deployment

The site is configured for easy deployment to platforms like Vercel, Netlify, or GitHub Pages.

## License

 2024 Central Texas Fly Fishing - All Rights Reserved
