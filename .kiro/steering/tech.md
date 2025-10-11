# Technology Stack

## Core Framework
- **Next.js 15.5.4** with App Router
- **React 19.1.0** with React DOM 19.1.0
- **TypeScript 5+** for type safety

## Styling & UI
- **Tailwind CSS 4** for utility-first styling
- **PostCSS** with Tailwind plugin for processing
- Custom CSS in `globals.css` for global styles

## Build System
- **Turbopack** for fast development and production builds
- **Next.js** built-in bundling and optimization
- **TypeScript compiler** with strict mode enabled

## Development Tools
- Path aliases configured (`@/*` maps to `./src/*`)
- Incremental TypeScript compilation
- Next.js plugin for enhanced IDE support

## Common Commands

### Development
```bash
npm run dev          # Start development server with Turbopack
```

### Production
```bash
npm run build        # Build for production with Turbopack
npm run start        # Start production server
```

### Package Management
```bash
npm install          # Install dependencies
npm install <package> # Add new dependency
```

## Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript compiler options
- `postcss.config.mjs` - PostCSS and Tailwind setup
- `package.json` - Dependencies and scripts