# Linux System Admin Academy

An interactive learning platform to master Linux system administration — from beginner commands to managing production servers. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **50+ interactive lessons** covering Linux basics, terminal commands, file systems, permissions, users & groups, package management, processes, shell scripting, networking, and system administration.
- **Structured learning roadmap** from beginner through intermediate to advanced topics.
- **Live terminal previews** showing real command output.
- **Progress tracking** — mark lessons as complete and track your progress.
- **Search & filter** to quickly find specific lessons.
- **Fully responsive** — works on desktop, tablet, and mobile.
- **100% free and open source.**

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Geist (Sans & Mono) via `next/font`
- **Deployment:** GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Static output is exported to the `out` directory.

## Project Structure

```
├── app/
│   ├── course/       # Course page with lesson viewer and sidebar
│   ├── roadmap/      # Structured learning roadmap
│   ├── layout.tsx    # Root layout with navbar
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles and Tailwind imports
├── components/
│   ├── home/         # Homepage sections (hero, features, terminal, etc.)
│   ├── Navbar.tsx    # Main navigation
│   ├── Footer.tsx    # Site footer
│   ├── Sidebar.tsx   # Course sidebar with lesson navigation
│   ├── LessonContent.tsx
│   └── ...
├── data/
│   └── linuxCourse.ts  # Course content and lesson data
├── public/
│   └── linux-admin-learning-platform/
└── ...
```

## License

MIT
