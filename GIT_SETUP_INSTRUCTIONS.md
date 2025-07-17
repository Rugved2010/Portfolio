# Git Setup Instructions for Rugved's Portfolio

## Current Status
✅ **Visitor Counter Added**: Working visitor counter in top-left showing "Hello visitor #X"
✅ **Database Setup**: PostgreSQL with visitor tracking
✅ **All Features Complete**: Typewriter animations, scroll effects, responsive design

## To Clone and Run Locally

### Step 1: Clone the Repository
Since this is a Replit project, you have a few options:

**Option A: Download from Replit**
1. In your Replit workspace, click the "..." menu
2. Select "Download as zip"
3. Extract the zip file to your local machine

**Option B: Use Replit's Git (Recommended)**
1. In Replit, open the Shell tab
2. Run these commands:
```bash
git remote add origin https://github.com/yourusername/rugved-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Set Up Locally
After you have the code locally:

```bash
# Navigate to project directory
cd rugved-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL

# Set up database
npm run db:push

# Start development server
npm run dev
```

## Environment Variables Needed

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db

# Optional: For production
NODE_ENV=development
PORT=5000
```

## Database Setup Options

### Option 1: Use Neon Database (Recommended)
1. Go to [neon.tech](https://neon.tech)
2. Create a free account
3. Create a new project
4. Copy the connection string to your `.env` file

### Option 2: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a new database: `createdb portfolio_db`
3. Use connection string: `postgresql://localhost:5432/portfolio_db`

### Option 3: Use Docker
```bash
docker run --name portfolio-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=portfolio_db -p 5432:5432 -d postgres
```

## Current Features

### ✅ Working Visitor Counter
- Displays "Hello visitor #X" in top-left corner
- Automatically tracks each visitor
- Stores in PostgreSQL database
- Graceful fallback if database unavailable

### ✅ Complete Portfolio Sections
- **Hero**: Name with typewriter role animation
- **About**: Personal info and education
- **Skills**: Categorized technical skills
- **Experience**: Timeline of work history
- **Projects**: Featured projects with links
- **Contact**: Working contact form

### ✅ Modern Features
- Responsive design (mobile-first)
- Smooth scroll animations
- Professional color scheme
- SEO optimized
- Fast loading with Vite

## File Structure
```
├── client/src/components/
│   ├── VisitorCounter.tsx    # NEW: Visitor counter
│   ├── TypewriterText.tsx    # Typewriter animation
│   ├── ScrollReveal.tsx      # Scroll animations
│   ├── HeroSection.tsx       # Landing section
│   ├── AboutSection.tsx      # About me
│   ├── SkillsSection.tsx     # Technical skills
│   ├── ExperienceSection.tsx # Work history
│   ├── ProjectsSection.tsx   # Featured projects
│   ├── ContactSection.tsx    # Contact form
│   └── Navbar.tsx           # Navigation
├── server/
│   ├── db.ts                # Database connection
│   ├── routes.ts            # API routes (visitor counter)
│   └── storage.ts           # Data access layer
└── shared/
    └── schema.ts            # Database schema
```

## API Endpoints

### Visitor Counter APIs
- `POST /api/visitor` - Record a new visitor
- `GET /api/visitor-count` - Get total visitor count

## Adding More Projects

Edit `client/src/components/ProjectsSection.tsx`:

```typescript
const projects = [
  {
    title: "Your New Project",
    description: "Project description...",
    image: "https://images.unsplash.com/...",
    technologies: ["React", "Node.js", "PostgreSQL"],
    highlight: "Key Achievement",
    highlightColor: "text-green-600",
    // Optional links:
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    paperUrl: "https://..." // for research papers
  },
  // ... existing projects
];
```

## Customization

### Colors and Branding
- Edit `client/src/index.css` for custom colors
- Modify hero section in `HeroSection.tsx`
- Update contact info in `ContactSection.tsx`

### Content Updates
- Personal info: `AboutSection.tsx`
- Skills: `SkillsSection.tsx` 
- Work history: `ExperienceSection.tsx`
- Meta tags: `client/index.html`

## Deployment Options

### Replit Deployments (Easiest)
1. Push code to GitHub
2. Connect to Replit
3. Auto-deploys with database

### Vercel + Railway
1. Frontend on Vercel
2. Backend + DB on Railway
3. Update API URLs

### Traditional Hosting
1. Build: `npm run build`
2. Upload `dist/` folder
3. Set up PostgreSQL database
4. Configure environment variables

## Troubleshooting

### Database Connection Issues
- Check DATABASE_URL format
- Ensure database is running
- Verify network connectivity

### Build Errors
- Run `npm run check` for TypeScript errors
- Ensure all dependencies installed
- Check Node.js version (18+)

### Visitor Counter Not Working
- Check database connection
- Verify API endpoints responding
- Check browser console for errors

## Next Steps
1. Clone/download the code
2. Set up local environment
3. Add your projects
4. Customize styling
5. Deploy to your preferred platform

The portfolio is fully functional with all requested features including the visitor counter!