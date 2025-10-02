# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML template for "Elev Agência Digital" - a Brazilian digital marketing agency website. The template features a modern, responsive design with dark/light mode support and interactive components.

## Architecture & Structure

### Frontend Architecture
- **Static HTML Template**: Built with vanilla HTML, CSS, and JavaScript
- **Modular Components**: Header, footer, and sidebar are loaded dynamically via fetch API
- **Responsive Design**: Built with Bootstrap grid system and custom CSS
- **Component-based Structure**: Each page section is self-contained with its own styling

### Key Files & Directories
- `index.html` - Main homepage with full marketing agency layout
- `header.html` - Shared navigation component with theme switcher
- `footer.html` - Shared footer with contact info and social links
- `sidebar.html` - Sidebar component for content editing/navigation
- `search-form.html` - Search functionality component
- `css/style.css` - Main stylesheet with comprehensive component system
- `js/script.js` - Main JavaScript file handling component initialization
- `php/` - Server-side form processing scripts
- `image/` - Static assets including logos, icons, and placeholder images

### JavaScript Architecture
- **Initialization Pattern**: Uses Promise.all() to load HTML components then initialize features
- **Modular Functions**: Each feature (video, navigation, theme, etc.) has its own init function
- **External Libraries**: jQuery, Bootstrap, Swiper.js, Isotope for filtering

### CSS Architecture
- **Organized Structure**: 57 distinct sections covering all components
- **CSS Custom Properties**: Uses CSS variables for theming
- **Component-based**: Each UI component has dedicated CSS sections
- **Responsive Design**: Mobile-first approach with comprehensive media queries

## Development Workflow

### Local Development
- Serve files through a local web server (not file:// protocol)
- PHP functionality requires a PHP-enabled server environment
- All components are fetched dynamically, requiring server context

### Theme System
- Dual theme support (light/dark mode)
- Theme switching handled in `themeswitch.js`
- CSS variables control theme colors
- State persisted in localStorage

### Form Processing
- Contact forms processed via `php/form_process.php`
- Newsletter signup via `php/newsletter_process.php`
- Client-side validation with jQuery
- AJAX form submissions with success/error handling

### JavaScript Libraries Used
- jQuery (DOM manipulation and AJAX)
- Bootstrap (responsive components and modals)
- Swiper.js (carousel/slider functionality)
- Isotope (filtering and layout)
- YouTube Iframe API (embedded video backgrounds)
- Animate.js (scroll animations)

### CSS Framework
- Custom CSS built on top of Bootstrap grid
- Font Awesome icons throughout
- Plus Jakarta Sans font family
- Comprehensive component system with 50+ defined sections

## Content Management

### Language Support
- Primary language: Portuguese (Brazil)
- Mixed content includes some English sections
- Client testimonials and service descriptions in Portuguese

### Image Strategy
- Uses Unsplash for stock photography via API
- Local client logos in `/image/client-*.png` format
- Placeholder images follow consistent naming: `dummy-img-{width}x{height}.jpg`
- SVG icons in `/image/svg/` directory

### Brand Identity
- Brand name: "Elev"
- Primary brand color: #0cb7f2 (cyan blue)
- Logo is text-based with custom styling
- Favicon provided in `/image/favicon.ico`

## Technical Requirements

### Dependencies
- Modern web server with PHP support
- jQuery 3.x
- Bootstrap 5.x
- Swiper.js for sliders
- Font Awesome icons
- Animate.css for animations

### Browser Support
- Modern browsers supporting ES6+ features
- CSS Grid and Flexbox support required
- YouTube Iframe API support for video backgrounds

### Performance Considerations
- Multiple external CDN dependencies
- Large CSS file (~comprehensive component system)
- YouTube video backgrounds may impact performance
- Swiper.js for mobile-optimized carousels

## Content Sections

The template includes these main sections:
- Hero banner with video background
- Services showcase
- Client testimonials with carousel
- Case studies grid
- Pricing plans
- Team member profiles
- Blog/news sections
- Contact forms
- Newsletter signup

Each section uses animation triggers and responsive layouts optimized for conversion.