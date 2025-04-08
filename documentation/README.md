# Swiss Metal Commodity Trading Website Documentation

## Overview

This documentation provides comprehensive information about the Swiss Metal Commodity Trading website, including its structure, features, and technical implementation. The website was developed to showcase the company's global metal commodity trading operations, with headquarters in Geneva, Switzerland.

## Table of Contents

1. [Website Structure](#website-structure)
2. [Pages Overview](#pages-overview)
3. [Technical Implementation](#technical-implementation)
4. [Multilingual Support](#multilingual-support)
5. [Responsive Design](#responsive-design)
6. [Content Management System](#content-management-system)
7. [Installation and Setup](#installation-and-setup)
8. [Maintenance and Updates](#maintenance-and-updates)

## Website Structure

The website follows a modular structure with the following directory organization:

```
swiss_metal_website/
├── admin/                  # CMS admin panel
│   ├── index.html          # Admin dashboard
│   ├── admin.css           # Admin styles
│   └── admin.js            # Admin functionality
├── css/                    # Stylesheet files
│   ├── styles.css          # Main styles
│   └── responsive.css      # Responsive design styles
├── images/                 # Image assets
├── js/                     # JavaScript files
│   ├── main.js             # Main functionality
│   └── i18n.js             # Internationalization
├── locales/                # Multilingual content
│   ├── en/                 # English translations
│   ├── fr/                 # French translations
│   └── es/                 # Spanish translations
├── pages/                  # Website pages
│   ├── about.html          # About Us page
│   ├── operations.html     # Operations page
│   ├── products.html       # Products & Commodities page
│   ├── global-presence.html # Global Presence page
│   └── contact.html        # Contact page
├── documentation/          # Documentation files
├── index.html              # Homepage
├── package.json            # Dependencies
└── README.md               # Project overview
```

## Pages Overview

### Homepage (index.html)
- Company overview and introduction
- Key business areas
- Global operational footprint
- Featured metal commodities

### About Us (pages/about.html)
- Company background and history
- Mission and values
- Organizational structure
- Geneva headquarters information
- Regulatory compliance and certifications

### Operations (pages/operations.html)
- Business model overview
- Value chain description
- Metal origination details
- Global distribution network
- Operational processes and logistics

### Products & Commodities (pages/products.html)
- Comprehensive metal commodities portfolio
- Detailed specifications for each metal
- Sourcing regions information
- Quality standards
- Technical information for industry professionals

### Global Presence (pages/global-presence.html)
- Interactive map showing operational regions
- Africa and South America origination work
- Distribution networks across North America, Europe, Middle East, and Asia
- Regional offices and representatives information

### Contact (pages/contact.html)
- Geneva headquarters address
- Contact information (email, phone)
- Contact form for inquiries
- Regional contact details
- Office hours information
- Map location integration

## Technical Implementation

### Frontend Technologies
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactivity
- Bootstrap 4 for responsive grid and components
- jQuery for DOM manipulation
- Chart.js for analytics visualizations

### Performance Optimization
- Minified CSS and JavaScript
- Optimized image loading
- Lazy loading for images
- Efficient CSS selectors
- Minimal HTTP requests

### Security Features
- SSL certification configuration
- Form validation and sanitization
- CSRF protection
- XSS prevention measures

### GDPR Compliance
- Cookie consent banner
- Privacy policy implementation
- Data retention controls
- User data protection measures

### Analytics Integration
- Dashboard for traffic monitoring
- Page performance metrics
- Visitor demographics tracking
- Conversion tracking

## Multilingual Support

The website includes full multilingual support for three languages:

- English (default)
- French
- Spanish

Implementation details:
- Language switching via the top navigation
- Translation files stored in JSON format in the locales directory
- Dynamic content loading based on selected language
- Persistent language selection using localStorage

## Responsive Design

The website is fully responsive and optimized for all device types:

- Desktop (1200px and above)
- Laptop (992px to 1199px)
- Tablet (768px to 991px)
- Mobile (below 768px)

Implementation details:
- Mobile-first approach
- Fluid grid system
- Flexible images and media
- Media queries for different breakpoints
- Touch-friendly navigation for mobile devices

## Content Management System

The website includes a custom CMS accessible through the admin panel:

### Features
- Dashboard with analytics overview
- Page content management
- Media library
- Translation management
- User management
- Settings configuration
- GDPR compliance controls

### Access
- Admin panel: /admin/index.html
- Default credentials: admin / password (change immediately after first login)

## Installation and Setup

### Prerequisites
- Web server with PHP support (Apache or Nginx recommended)
- Node.js and npm for development

### Installation Steps
1. Clone or download the repository
2. Install dependencies: `npm install`
3. Configure web server to point to the project directory
4. Set up SSL certificate for HTTPS
5. Update configuration in admin settings

### Development Environment
For local development:
1. Clone the repository
2. Run `npm install` to install dependencies
3. Use a local server (e.g., Live Server extension for VS Code)

## Maintenance and Updates

### Regular Maintenance Tasks
- Check for broken links
- Update content through the CMS
- Monitor analytics for user behavior
- Backup website files and database regularly
- Update dependencies when necessary

### Content Updates
- Use the CMS admin panel for content changes
- Add new translations through the language management section
- Upload new media through the media library

### Technical Updates
- Keep Bootstrap and jQuery updated to latest stable versions
- Monitor for security patches
- Test thoroughly after updates
- Maintain browser compatibility

## Support and Contact

For technical support or questions about the website, please contact:
- Email: webmaster@swissmetaltrading.com
- Phone: +41 XX XXX XX XX
