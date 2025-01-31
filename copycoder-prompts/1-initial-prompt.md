Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Food Distribution Company Homepage with Product Categories
</summary_title>

<image_analysis>

1. Navigation Elements:
- Top header with: Home, Products, About, Contact, Search
- Secondary navigation through product category cards
- Footer navigation with company info and social links


2. Layout Components:
- Full-width hero section (100vw x 600px)
- Content containers max-width: 1200px
- Category grid: 4x3 layout with equal spacing
- Brand showcase section: single row carousel
- Blog section: 3-column grid layout


3. Content Sections:
- Hero banner with "Seafood & Sushi" headline
- HORECA supplier cards (3-column)
- Brand showcase
- Product categories grid
- Blog section with featured articles
- Newsletter subscription
- Company information and map
- Video section


4. Interactive Controls:
- Primary CTA button: "Browse Our Products"
- Category cards with hover effects
- Newsletter subscription form
- Social media links
- Contact form
- Video player embed


5. Colors:
- Primary Red: #D32F2F
- White: #FFFFFF
- Dark Gray: #333333
- Light Gray: #F5F5F5
- Accent Red: #B71C1C


6. Grid/Layout Structure:
- 12-column grid system
- 20px gutters between columns
- 40px section padding
- Responsive breakpoints at 768px and 1024px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── Navigation
│   ├── features/
│   │   ├── ProductCategories
│   │   ├── BrandShowcase
│   │   ├── BlogSection
│   │   └── Newsletter
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Product category filtering
- Newsletter subscription
- Video integration
- Brand showcase carousel
- Contact form with validation
- Interactive map integration


3. State Management:
```typescript
interface AppState {
├── products: {
│   ├── categories: Category[]
│   ├── selectedCategory: string
│   └── isLoading: boolean
├── newsletter: {
│   ├── email: string
│   ├── isSubscribed: boolean
│   └── error: string
├── contact: {
│   ├── formData: ContactForm
│   └── submitStatus: string
└── }
}
```


4. Routes:
```typescript
const routes = [
├── '/',
├── '/products/*',
├── '/about',
├── '/contact',
└── '/blog/*'
]
```


5. Component Architecture:
- Layout components (Header, Footer)
- Feature components (ProductGrid, Newsletter)
- Shared components (Button, Card, Input)
- HOCs for data fetching and layout


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── mobile: 320px,
├── tablet: 768px,
├── desktop: 1024px,
└── wide: 1200px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.