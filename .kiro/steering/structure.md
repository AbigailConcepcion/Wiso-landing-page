# Project Structure

## Root Directory
```
wiso/
├── .kiro/              # Kiro AI assistant configuration
├── public/             # Static assets (images, icons, etc.)
├── src/                # Source code
│   └── app/            # Next.js App Router pages and layouts
├── node_modules/       # Dependencies (auto-generated)
├── package.json        # Project dependencies and scripts
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
├── postcss.config.mjs  # PostCSS and Tailwind configuration
└── README.md           # Project documentation
```

## Source Code Organization (`src/`)
- **`app/`** - Next.js App Router directory
  - `layout.tsx` - Root layout component
  - `page.tsx` - Home page component
  - `globals.css` - Global CSS styles
  - `favicon.ico` - Application favicon

## File Naming Conventions
- **Components**: PascalCase (e.g., `MyComponent.tsx`)
- **Pages**: lowercase with App Router conventions (`page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: PascalCase with `.types.ts` suffix (e.g., `User.types.ts`)

## Import Path Conventions
- Use `@/` alias for imports from `src/` directory
- Prefer absolute imports over relative imports when possible
- Group imports: external libraries first, then internal modules

## Asset Organization
- **`public/`** - Static files served at root URL
  - SVG icons and images
  - Favicon and manifest files
  - Any files that need direct URL access

## Code Organization Principles
- Follow Next.js App Router conventions
- Keep components close to where they're used
- Use TypeScript interfaces and types consistently
- Maintain separation between UI components and business logic