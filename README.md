# Vite React Module Federation

## Intro

A minimal example of module federation using React and Vite:

Host and remote generated using `pnpm create vite --template react`

Remote exposes the `RemoteGreeting` which is lazily imported and rendered in host app

Files of interest:

- [vite-react-host/vite.config.js](vite-react-host/vite.config.js#L12)
- [vite-react-remote/vite.config.js](vite-react-remote/vite.config.js#L12)
- [vite-react-remote/src/RemoteGreeting.jsx](vite-react-remote/src/RemoteGreeting.jsx)
- [vite-react-host/src/App.jsx](vite-react-host/src/App.jsx#L6)

## Run

`pnpm dev`
