# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Development Commands

- **Start development server**: `npm run dev` (starts at http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm run start`
- **Lint code**: `npm run lint` (uses ESLint with Next.js and TypeScript configs)
- **Type checking**: `npx tsc --noEmit` (TypeScript checks via tsc)

## 🏗️ Code Architecture & Structure

### Project Organization
- **`src/app`**: Next.js 13+ App Router directory
  - `layout.tsx`: Root layout with metadata, fonts, and global CSS
  - `page.tsx`: Home page (`/`) 
  - `servicios/[slug]/page.tsx`: Dynamic route for service detail pages
- **`src/components/montiuk`**: Reusable UI components following atomic design principles
- **`src/data`**: Data fetching utilities and constants
- **`src/content`**: Content assets (currently unused)
- **`public`**: Static assets (images, icons)

### Key Architectural Patterns

#### 1. App Router & Routing
- Uses Next.js 13+ App Router with file-system based routing
- Static generation via `generateStaticParams()` for service pages
- Metadata generation via `generateMetadata()` for SEO
- Client components marked with `"use client"` directive where needed
- Navigation handled via `next/link` and `next/navigation` hooks

#### 2. Component Structure
- **Layout Components**: `RootLayout` (app/layout.tsx) - provides HTML structure, metadata, global styles
- **UI Components**: Located in `src/components/montiuk/`
  - **HeroSection**: Main banner with auto-rotating slides and service highlights
  - **ProcessSection**: Service grid display (id="servicios") - shows 4 service categories with images and links
  - **AboutSection**: Company overview with statistics (id="nosotros")
  - **ClientsSection**: Client logos placeholder (id="clientes")
  - **ServicesSection**: Blog carousel (id="blog") - Note: misnamed, actually shows blog posts
  - **ContactSection**: Contact form and information (id="contacto")
  - **SiteFooter**: Simple copyright footer
  - **MainNav**: Responsive navigation with scroll-to-section links
  - **BlogCarousel**: Horizontal scrollable blog post cards
  - **ContactForm**: Email-only form that opens mailto: link

#### 3. Data & Content
- **Service Data**: Defined in `src/data/services.ts`
  - Typed TypeScript arrays with service objects (slug, title, summary, image)
  - Utility functions: `getServiceBySlug()`, `isServiceSlug()`
  - Used by: ProcessSection (grid), ServicioPage (detail), HeroSection (quick links)
- **Blog Data**: Hardcoded in `src/components/montiuk/BlogCarousel.tsx`
  - Array of post objects with category, date, title, excerpt
  - Used by: ServicesSection (blog carousel)

#### 4. Styling Approach
- **Tailwind CSS v4** via `@tailwindcss/postcss` and `tailwindcss` packages
- Utility-first classes with custom configurations
- Responsive design using `sm:`, `md:`, `lg:` prefixes
- Dark/light themes not implemented (uses slate/gray palette)
- CSS variables for fonts (Inter from next/font/google)
- Gradient backgrounds, shadows, transitions for interactivity

#### 5. Image Optimization
- Uses Next.js `next/image` component for automatic optimization
- Priority loading for above-the-fold images
- Fill layout for hero backgrounds
- External images via Vercel Image Optimization (when deployed)

#### 6. TypeScript Usage
- Strict TypeScript configuration (`strict: true` in tsconfig.json)
- Component props typed with interfaces
- Service data fully typed with Service and ServiceSlug types
- Path alias `@/*` mapped to `./src/*` for clean imports

## 🔧 Important Files & Conventions

### Metadata & SEO
- Root metadata in `src/app/layout.tsx` (title, description)
- Dynamic metadata in `src/app/servicios/[slug]/page.tsx` via `generateMetadata()`
- Open Graph/Twitter cards not configured

### Navigation Patterns
- MainNav uses scroll-to-section links (href="/#section-id")
- Service detail pages use dynamic routes: `/servicios/[slug]`
- Back navigation in service pages via MainNav prop
- Mobile vs desktop navigation variations in MainNav

### Component Dependencies
- Client components: HeroSection (useEffect/useState), ProcessSection (use client), BlogCarousel (useRef/useState), ContactForm (useState)
- Server components: Most others by default (no "use client")
- Data fetching: Service data imported directly; no external APIs in current codebase

### Assets & Media
- Images stored in `public/` directory (hero images, logo)
- References use `/image-name.extension` format
- SVG icons inline in components (HeroSection, MainNav, ProcessSection)
- No external font loading beyond next/font/google

## 💡 Development Tips

### Component Creation
1. Create new components in `src/components/montiuk/`
2. Use `"use client"` only when hooks, event listeners, or browser APIs needed
3. Follow existing naming convention: `ComponentName.tsx`
4. Export as named function: `export function ComponentName() {}`
5. Use Tailwind utility classes for styling (avoid custom CSS when possible)

### Service Addition
1. Add new service object to `src/data/services.ts` array
2. Update `serviceSlugs` tuple with new slug
3. Service will automatically appear in:
   - ProcessSection (service grid)
   - ServicioPage (detail page via routing)
   - HeroSection (if added to heroServices array)
4. Add hero image to `public/` directory

### Styling Guidelines
- Use existing color palette: slate-50, slate-100, slate-200, slate-900, white
- Maintain consistent spacing: py-20, px-4, sm:px-6, lg:px-8 containers
- Follow heading hierarchy: h1 (Hero), h2 (section titles), h3 (cards/items)
- Use transition classes for hover effects: `transition`, `duration-300`, `ease-out`
- Apply ring shadows for focus states: `ring-1`, `ring-black/10`

### Performance Considerations
- Images optimized via Next.js Image component
- Lazy loading by default (except priority images)
- Code splitting via dynamic routes and client/server components
- Minimal client-side JavaScript (mostly UI interactions)

### Common Issues to Watch For
- **ServicesSection misnomer**: Despite the name, this component shows the blog carousel, not services
- **Actual services display**: Services are shown in ProcessSection (id="servicios")
- **Blog implementation**: Currently hardcoded in BlogCarousel; not connected to actual content API
- **Form handling**: ContactForm uses mailto: link rather than API endpoint
- **Image optimization**: Ensure images in public/ are web-optimized before adding

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Sm: ≥ 640px
- Md: ≥ 768px
- Lg: ≥ 1024px
- Tailwind prefixes: `sm:`, `md:`, `lg:` apply at these breakpoints

## 🛠️ Tooling
- **Formatter**: Prettier configuration inferred from ESLint
- **Linting**: ESLint with Next.js and TypeScript plugins
- **Type Checking**: TypeScript 5 with Next.js plugin
- **Build**: Next.js 16.2.3 with React 19