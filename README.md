# Portfolio Website

This is my portfolio website.

## Tech Stack

- **Framework:** Next.js 16, React 19
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Testing:** Vitest, Testing Library
- **Docs:** Storybook

## Getting Started

```bash
npm ci            # install dependencies
npm run dev       # development server at http://localhost:3000
npm run storybook # component explorer at http://localhost:6006
npm run test      # run tests
npm run lint      # run linter
```

## Project Structure

```
├── app/             # pages
├── components/
│   ├── animations/  # motion-based animation wrappers
│   ├── backgrounds/ # decorative background patterns
│   ├── layout/      # structural page components
│   └── ui/          # generic UI primitives
├── hooks/           # shared custom React hooks
├── utility/         # pure helper functions
└── styles/          # global styles
```

Each component has the following structure:
```
└── Button/
    ├── index.tsx          # component implementation
    ├── index.module.scss  # component styles
    ├── index.stories.tsx  # Storybook
    └── index.test.tsx     # unit tests
```