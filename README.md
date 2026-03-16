# Dokka Seethamma Charitable Trust Website

[![Astro](https://img.shields.io/badge/Astro-5.x-orange.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-blue.svg)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive website for Dokka Seethamma Charitable Trust - a non-profit organization dedicated to continuing the legacy of the "Golden Lady" who served food to millions.

![Website Preview](./public/preview.jpg)

## 🌟 Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance and SEO
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🎨 Golden Theme**: Warm golds, creams, and earthy tones representing the "Golden Lady"
- **🖼️ Image Gallery**: Interactive gallery with lightbox functionality
- **📊 Transparency Reports**: Monthly reports on donations and impact
- **💳 Donation Integration**: Ready for Stripe/Razorpay integration
- **🔍 SEO Optimized**: Complete meta tags and structured data
- **♿ Accessible**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   └── favicon.svg        # Golden sun logo
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ImpactStats.astro
│   │   ├── MissionSection.astro
│   │   ├── DonateCTA.astro
│   │   └── RecentEvents.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout with SEO
│   ├── pages/             # Route pages
│   │   ├── index.astro    # Home page
│   │   ├── about.astro    # About/Story page
│   │   ├── events.astro   # Events & Reports
│   │   ├── gallery.astro  # Photo gallery
│   │   ├── contact.astro  # Contact & Volunteer
│   │   └── donate.astro   # Donation page
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind with custom colors
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dokkaseethamma/dokkaseethamma.git
cd dokkaseethamma
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and add your TinaCloud credentials for production
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🎨 Color Palette

The website uses a warm, golden color scheme representing the "Golden Lady" and nourishment:

- **Golden 500**: `#e89f2a` - Primary accent
- **Golden 600**: `#d4821f` - Hover states
- **Cream 50**: `#fdfcfb` - Background
- **Cream 100**: `#faf8f5` - Card backgrounds
- **Earth 800**: `#6e6358` - Body text
- **Earth 900**: `#5a524a` - Headings

## 📄 Pages

### Home (`/`)
- Hero section with mission statement
- Impact statistics
- Mission overview
- Upcoming events preview
- Donation CTA
- Trust indicators

### About (`/about`)
- Story of Dokka Seethamma
- Mission & Vision
- Core values
- Team/Trustees
- Journey timeline

### Events (`/events`)
- Upcoming events with registration
- Past events archive
- Monthly transparency reports

### Gallery (`/gallery`)
- Filterable photo gallery
- Lightbox viewer
- Categories: Events, Volunteers, Beneficiaries

### Contact (`/contact`)
- Contact form
- Office information
- Volunteer registration
- FAQ accordion

### Donate (`/donate`)
- Donation amount selection
- Bank transfer details
- UPI QR code placeholder
- Impact calculator
- 80G tax benefit info

## 🔧 Customization

### Adding New Events

Edit `src/pages/events.astro` and add to the `upcomingEvents` or `pastEvents` arrays:

```astro
{
  id: 'event-3',
  title: 'New Event Name',
  date: '2025-03-15',
  time: '10:00 AM - 2:00 PM',
  location: 'Venue, City',
  image: 'https://images.unsplash.com/...',
  description: 'Event description',
  status: 'upcoming',
}
```

### Adding Gallery Images

Edit `src/pages/gallery.astro` and add to the `galleryItems` array:

```astro
{
  src: 'https://images.unsplash.com/...',
  thumbnail: 'https://images.unsplash.com/...',
  title: 'Image Title',
  category: 'events',
  description: 'Image description',
}
```

### Updating Bank Details

Edit `src/pages/donate.astro` and update the `bankDetails` object with actual account information.

## 🌐 Deployment

### TinaCloud Setup (Required for CMS)

1. Go to https://app.tina.io and create an account
2. Create a new project and link your GitHub repository
3. Copy the `Client ID` and `Token` from the project settings
4. Add these to your environment variables in your hosting platform:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `TINA_PUBLIC_IS_LOCAL=false`

### Static Hosting (Recommended)

Build the site for static hosting:

```bash
# Build Tina CMS admin first
npm run tina:build

# Then build the Astro site
npm run build
```

The `dist/` folder will contain the static files ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any static hosting

### Netlify Deployment

1. Connect your GitHub repo to Netlify
2. Build command: `npm run tina:build && npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard:
   - `TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `TINA_PUBLIC_IS_LOCAL=false`

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

Set environment variables in Vercel dashboard after deployment.

## 🔗 Integrating Payment Gateway

### Stripe Integration

1. Install Stripe:
```bash
npm install @stripe/stripe-js
```

2. Create a checkout page using Stripe Elements
3. Add server-side API route for payment processing

### Razorpay Integration (India)

1. Install Razorpay:
```bash
npm install razorpay
```

2. Add Razorpay checkout script
3. Configure with your API keys

## 📱 SEO Checklist

- [x] Meta tags on all pages
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured data (JSON-LD)
- [x] Semantic HTML
- [x] Alt text on images
- [x] Canonical URLs
- [x] Sitemap (auto-generated)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

## 📞 Contact

- Website: [https://dokkaseethamma.ngo](https://dokkaseethamma.ngo)
- Email: contact@dokkaseethamma.ngo
- Phone: +91 99999 99999

---

Made with ❤️ for Dokka Seethamma Charitable Trust
