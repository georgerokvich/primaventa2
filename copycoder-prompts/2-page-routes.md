Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /home
- /products
- /about
- /contact
- /search

Page Implementations:
/home:
Core Purpose: Showcase company highlights and featured products
Key Components
- Hero section with dynamic banner
- Featured products carousel
- Latest news

/updates section
- Newsletter signup form
Layout Structure:
- Full-width hero at top
- Grid-based content sections
- Sticky header navigation
- Footer with company info

/products:
Core Purpose: Display and filter product catalog
Key Components
- Product grid

/sort functionality
- Product cards with quick view
Layout Structure:
- Sidebar + main content layout
- Responsive grid (4 columns desktop, 2 mobile)
- Infinite scroll or pagination

/about:
Core Purpose: Share company information and values
Key Components
- Company story timeline
- Team member profiles
- Mission

/vision statements
- Company statistics
Layout Structure:
- Single column narrative layout
- Alternating text

/contact:
Core Purpose: Provide multiple contact channels
Key Components
- Contact form
- Office locations map
- Contact information cards
- FAQ accordion
Layout Structure
- Two-column layout (form + info)
- Stack vertically on mobile
- Floating contact buttons

/search:
Core Purpose: Global search functionality
Key Components
- Search input with filters
- Real-time results
- Recent searches
- Popular suggestions
Layout Structure
- Full-width search bar
- Results in grid

Layouts:
MainLayout:
Applicable routes
- All routes
Core components
- Header with navigation
- Footer
- Sidebar (when needed)
- Breadcrumbs
Responsive behavior
- Collapsible mobile menu
- Sticky header on scroll
- Adjustable content width
- Mobile-first breakpoints

SearchLayout
Applicable routes
- /search
- /products
Core components
- Search bar
- Filter panel
- Results area
Responsive behavior
- Collapsible filters on mobile
- Adjustable grid columns
- Floating search bar
- Sort/filter overlays

ContentLayout
Applicable routes
- /about
- /contact
Core components
- Page header
- Content area
- Side navigation (optional)
Responsive behavior
- Single column on mobile
- Flexible content width
- Responsive images
- Adaptive spacing
</page-structure-prompt>