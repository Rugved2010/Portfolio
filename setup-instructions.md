# Rugved Recharla Portfolio - Local Setup Guide

## Prerequisites
- Node.js 18+ installed
- Git (optional)

## Setup Steps

### 1. Create Project Directory
```bash
mkdir rugved-portfolio
cd rugved-portfolio
```

### 2. Initialize Package.json
```bash
npm init -y
```

### 3. Install Dependencies
```bash
# Production dependencies
npm install @hookform/resolvers @jridgewell/trace-mapping @neondatabase/serverless @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip @tanstack/react-query class-variance-authority clsx cmdk connect-pg-simple date-fns drizzle-orm drizzle-zod embla-carousel-react express express-session framer-motion input-otp lucide-react memorystore next-themes passport passport-local react react-day-picker react-dom react-hook-form react-icons react-resizable-panels recharts tailwind-merge tailwindcss-animate tw-animate-css vaul wouter ws zod zod-validation-error

# Dev dependencies
npm install -D @replit/vite-plugin-cartographer @replit/vite-plugin-runtime-error-modal @tailwindcss/typography @tailwindcss/vite @types/connect-pg-simple @types/express @types/express-session @types/node @types/passport @types/passport-local @types/react @types/react-dom @types/ws @vitejs/plugin-react autoprefixer drizzle-kit esbuild postcss tailwindcss tsx typescript vite
```

### 4. Create Directory Structure
```bash
mkdir -p client/src/components/ui
mkdir -p client/src/hooks
mkdir -p client/src/lib
mkdir -p client/src/pages
mkdir -p server
mkdir -p shared
```

### 5. Copy Configuration Files
You'll need to create these files with the content I provided earlier:

**Root level files:**
- package.json (update scripts section)
- tailwind.config.ts
- vite.config.ts
- tsconfig.json
- postcss.config.js
- components.json
- drizzle.config.ts

**Client files:**
- client/index.html
- client/src/index.css
- client/src/main.tsx
- client/src/App.tsx
- client/src/pages/home.tsx
- client/src/pages/not-found.tsx

**Components:**
- client/src/components/Navbar.tsx
- client/src/components/HeroSection.tsx
- client/src/components/AboutSection.tsx
- client/src/components/SkillsSection.tsx
- client/src/components/ExperienceSection.tsx
- client/src/components/ProjectsSection.tsx
- client/src/components/ContactSection.tsx
- client/src/components/Footer.tsx
- client/src/components/TypewriterText.tsx
- client/src/components/ScrollReveal.tsx

**Utility files:**
- client/src/hooks/use-mobile.tsx
- client/src/hooks/use-toast.ts
- client/src/lib/utils.ts
- client/src/lib/queryClient.ts

**Server files:**
- server/index.ts
- server/routes.ts
- server/storage.ts
- server/vite.ts

**Shared files:**
- shared/schema.ts

### 6. Update Package.json Scripts
Replace the scripts section in package.json with:
```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  }
}
```

### 7. Run the Project
```bash
npm run dev
```

The site will be available at `http://localhost:5000`

## Important Notes

1. **UI Components**: You'll need to install shadcn/ui components. Run:
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button input textarea label toast toaster
   ```

2. **Environment Variables**: Create a `.env` file if you plan to use a database later.

3. **Database**: Currently uses in-memory storage. No database setup required for basic functionality.

## File Contents
All the component code, styles, and configuration files are provided in the previous messages. Copy each file's content exactly as shown.

## Customization
- Modify colors in `client/src/index.css`
- Update personal information in the component files
- Add new projects in `ProjectsSection.tsx`
- Customize animations in the CSS file

## Troubleshooting
- If you get TypeScript errors, run `npm run check` to see specific issues
- For missing dependencies, run `npm install` again
- Check Node.js version is 18+