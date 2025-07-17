# Rugved Recharla Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a visitor counter and smooth animations.

## Features

✨ **Modern Design**: Clean, minimalistic design inspired by Nike and Tesla
🎨 **Typewriter Animation**: Dynamic role cycling in the hero section
📊 **Visitor Counter**: Real-time visitor tracking with database storage
🎯 **Smooth Animations**: Scroll-triggered animations throughout the site
📱 **Responsive**: Mobile-first design that works on all devices
🔧 **Professional Sections**: About, Skills, Experience, Projects, and Contact

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Replit Deployments

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (or use the included database setup)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rugved-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── pages/         # Page components
│   └── index.html         # Main HTML file
├── server/                # Backend Express server
│   ├── db.ts             # Database configuration
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data access layer
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema definitions
└── package.json          # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run check` - Type checking

## Key Components

### Visitor Counter
- Automatically tracks unique visitors
- Displays "Hello visitor #X" in top-left corner
- Stores visitor data in PostgreSQL database
- Graceful fallback if database is unavailable

### Typewriter Animation
- Cycles through professional roles
- Customizable typing and deleting speeds
- Smooth cursor animation

### Scroll Animations
- Intersection Observer-based animations
- Staggered delays for visual appeal
- Fade-in-up effects on scroll

## Adding New Projects

To add new projects, edit `client/src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    image: "project-image-url",
    technologies: ["Tech1", "Tech2", "Tech3"],
    highlight: "Key Achievement",
    highlightColor: "text-green-600",
    // Optional: paperUrl, githubUrl, liveUrl
  },
  // ... existing projects
];
```

## Customization

### Colors and Styling
- Main colors defined in `client/src/index.css`
- Uses CSS custom properties for easy theming
- Tailwind CSS for utility-first styling

### Content Updates
- Personal information in component files
- Skills in `SkillsSection.tsx`
- Experience in `ExperienceSection.tsx`
- Contact info in `ContactSection.tsx`

## Database Schema

The application uses two main tables:

- **users**: Basic user authentication (for future features)
- **visitors**: Visitor tracking with IP, user agent, and timestamp

## Deployment

This project is optimized for Replit Deployments:

1. Push your code to a Git repository
2. Connect to Replit
3. The build process will automatically handle frontend and backend compilation
4. Environment variables are managed through Replit's secrets

## License

MIT License - feel free to use this as a template for your own portfolio!

## Contact

Rugved Recharla - rugvedrecharla@gmail.com
LinkedIn: [linkedin.com/in/rugvedrecharla](https://www.linkedin.com/in/rugvedrecharla)