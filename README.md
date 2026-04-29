# Nehal Portfolio (F1 Futurism Edition)

Link of Site -- https://personal-site-ochre-five-92.vercel.app/
Deploy using vercel ..

Frontend-only portfolio for **Md Nehal Khurshid** built with React, Vite, GSAP, and Three.js.

## What Changed
- The old backend/contact flow has been removed.
- GitHub project details are now stored in the frontend instead of being fetched from an API.
- The F1 visual style is preserved, while the unwanted red 3D object is removed.

## Tech Stack
- React + Vite
- GSAP
- Three.js / React Three Fiber
- Responsive CSS

## Local Setup
1. `cd client`
2. `npm install`
3. `npm run dev`

Use the Vite dev server for local development. Do not open the project with VS Code Live Server, because that injects its own `ws://127.0.0.1:5500/...` client and causes unrelated WebSocket errors in the browser console.

## Environment Variables
- The root `.env` is no longer used for backend services.
- The project currently keeps only a safe frontend profile link example.

## Deployment
1. `cd client`
2. `npm run build`
3. Deploy the `client/dist` output to your hosting platform
