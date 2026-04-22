# Creative Agency Landing Page

A modern, animated landing page for a creative agency, inspired by filmlaab.com.

## Features

- Responsive design
- GSAP animations with ScrollTrigger
- Video portfolio with hover effects
- Client marquee
- Instagram feed simulation
- Modal video player

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- GSAP
- Framer Motion

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Docker

Build and run with Docker:

```bash
docker build -t creative-agency-landing .
docker run -d --restart unless-stopped -p 3000:3000 creative-agency-landing
```

Or use Compose:

```bash
docker compose up --build -d
```

`compose.yaml` already uses `restart: unless-stopped`, so the container will come back after a server reboot as long as the Docker service itself is enabled on the host.

For Linux servers with `systemd`, you can also install the included unit file:

```bash
sudo cp deploy/creative-agency.service /etc/systemd/system/creative-agency.service
sudo systemctl daemon-reload
sudo systemctl enable --now creative-agency.service
```

Before enabling it, update `WorkingDirectory` in `deploy/creative-agency.service` to the real project path on your server.

## WSL / Windows note

If you run `npm install` in Windows and then `npm run build` in WSL (or the other way around), Next.js can miss the platform-specific `@next/swc-*` binary and fail during startup/build.

Use the same OS environment for install and run. If you switch environments, reinstall dependencies there first:

```bash
rm -rf node_modules
npm install
npm run build
```

If `npm install` fails with `ERR_SOCKET_TIMEOUT`, retry in the same environment after removing the partial install:

```bash
rm -rf node_modules
npm install
```

If you build from WSL and see `Bus error (core dumped)` while the project lives under `/mnt/...`, move the project into the WSL Linux filesystem (for example `~/projects/...`) and reinstall there. In this repo, the build completed successfully from the Linux filesystem and crashed only from the Windows-mounted path.

## Notes

- Media assets are placeholders from Unsplash and sample videos. Replace with actual client content.
- Optimized for performance with lazy loading and efficient animations.
