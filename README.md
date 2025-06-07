# Pay It Forward Tri-State Website

A charity website for Pay It Forward Tri-State, Inc. Built with React, Vite, and Tailwind CSS.

## Development

To start the development server:

```bash
npm install
npm run dev
```

This will start the Vite development server on `http://localhost:5173`

## Building for Production

To build the project for production:

```bash
npm run build
```

This creates a `dist` folder with the built files ready for deployment.

## Express Server (Testing)

To test the built files with an Express server:

```bash
npm run build
npm run server
```

This will serve the built files on `http://localhost:3000`

## Deployment

This project is configured for Netlify deployment:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

The `netlify.toml` and `public/_redirects` files handle client-side routing for the SPA.

## Project Structure

```
src/
  components/
    Homepage.jsx
    OurStoryPage.jsx
    VolunteerPage.jsx
    GivePage.jsx
    ContactPage.jsx
  App.jsx
  main.jsx
  index.css
```

## Tech Stack

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- Express (development server)