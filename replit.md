# Rugved Recharla Portfolio Website

## Overview

This is a professional portfolio website built for Rugved Recharla, a Software Engineer and IT Specialist. The application is a full-stack web application using modern web technologies with a React frontend and Express backend. The site showcases Rugved's professional experience, technical skills, projects, and contact information in an elegant, responsive design.

## Recent Changes (January 2025)

✓ Removed visitor counter feature completely (for easier local development)
✓ Redesigned professional experience section with modern card-based layout
✓ Added company logos and visual elements to experience cards
✓ Added skill icons next to programming languages and technologies
✓ Added missing Viacom18 Software Engineer Intern experience (August 2019 – December 2020)
✓ Enhanced visual design with gradient backgrounds and hover effects

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured via Drizzle ORM)
- **Database Host**: Neon Database (serverless PostgreSQL)
- **Development**: Hot reload with Vite integration

### Design System
- **Component Library**: Shadcn/ui with "new-york" style variant
- **Icons**: Lucide React icons
- **Typography**: Inter font family from Google Fonts
- **Color Scheme**: Neutral-based palette with blue accent colors
- **Responsive**: Mobile-first design approach

## Key Components

### Frontend Components
1. **Layout Components**
   - `Navbar`: Fixed navigation with smooth scrolling
   - `Footer`: Contact information and social links

2. **Section Components**
   - `HeroSection`: Landing area with typewriter effect
   - `AboutSection`: Personal information and education
   - `SkillsSection`: Technical skills categorized by domain
   - `ExperienceSection`: Professional work history
   - `ProjectsSection`: Featured projects with technologies
   - `ContactSection`: Contact form and information

3. **Utility Components**
   - `TypewriterText`: Animated text component
   - `ScrollReveal`: Intersection observer-based animations

### Backend Structure
- **Routes**: Placeholder route system ready for API endpoints
- **Storage**: In-memory storage implementation with interface for future database integration
- **Middleware**: Request logging and error handling

### Database Schema
- **Users Table**: Basic user structure with username/password (placeholder for future features)
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

## Data Flow

### Client-Side
1. React components fetch data using TanStack Query
2. State management through React hooks and context
3. Smooth scrolling navigation between sections
4. Form submissions handled with toast notifications

### Server-Side
1. Express server serves static assets in production
2. API routes prefixed with `/api` (currently placeholder)
3. Development mode integrates Vite middleware for HMR
4. Database operations through Drizzle ORM abstractions

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production
- **Drizzle Kit**: Database migrations and schema management

### Database and Cloud
- **Neon Database**: Serverless PostgreSQL hosting
- **PostgreSQL**: Relational database system
- **Environment Variables**: Database connection configuration

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Assets**: Static assets served from build directory

### Environment Configuration
- **Development**: Uses Vite dev server with HMR
- **Production**: Express serves built React app as static files
- **Database**: PostgreSQL connection via environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Database schema synchronization

### Replit Integration
- **Development Banner**: Shows when opened outside Replit environment
- **Runtime Error Overlay**: Development error handling
- **Cartographer Plugin**: Replit-specific development features

This architecture provides a solid foundation for a professional portfolio website with room for future enhancements like authentication, blog functionality, or content management features.