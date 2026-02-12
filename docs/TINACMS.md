# TinaCMS Setup & Usage

## Overview

This project uses **TinaCMS** for content management, allowing non-technical users to edit content through a visual interface.

## Local Development

### Prerequisites

- Node.js installed
- Dependencies installed: `npm install`

### Starting the Dev Environment

**Option 1: Run both servers simultaneously (Recommended)**

Terminal 1 - Start TinaCMS:
```bash
npm run tina
```

Terminal 2 - Start Astro:
```bash
npm run dev
```

Then open: http://localhost:4321/admin/index.html

**Option 2: Use concurrent mode (if configured)**

```bash
npm run dev:all
```

### Accessing the CMS

1. Start both dev servers as described above
2. Navigate to: http://localhost:4321/admin/index.html
3. TinaCMS will load in local mode (no login required)

## Production Setup (TinaCloud)

For production use with TinaCloud:

### 1. Create TinaCloud Account

1. Go to https://app.tina.io
2. Sign up / Log in
3. Create a new project
4. Connect your GitHub repository

### 2. Environment Variables

Create a `.env` file in the project root:

```env
# TinaCloud Configuration
TINA_CLIENT_ID=your-client-id-from-tinacloud
TINA_TOKEN=your-token-from-tinacloud
```

Get these values from your TinaCloud project dashboard.

### 3. Build for Production

```bash
npm run tina:build
npm run build
```

## Content Collections

The CMS manages the following content types:

### Events
- **Path:** `src/content/events/`
- **Fields:** Title, Date, Location, Image, Status, Description

### Gallery
- **Path:** `src/content/gallery/`
- **Fields:** Title, Image, Category, Description

### News & Updates
- **Path:** `src/content/news/`
- **Fields:** Title, Date, Featured, Image, Content

### Sponsors
- **Path:** `src/content/sponsors/`
- **Fields:** Name, Logo, Tier, Website, Description

### Newsletters
- **Path:** `src/content/newsletters/`
- **Fields:** Title, Date, PDF, Content

### Transparency Reports
- **Path:** `src/content/transparency/`
- **Fields:** Title, Month, Year, Donations, Expenses, PDF, Summary

## Troubleshooting

### "Failed loading TinaCMS assets" Error

**Cause:** TinaCMS dev server is not running on port 4001

**Solution:**
1. Ensure `npm run tina` is running in a separate terminal
2. Wait for "TinaCMS Dev Server is active" message
3. Refresh the admin page

### 404 on /admin

**Cause:** The admin files are not properly built

**Solution:**
```bash
# Clean and rebuild
rm -rf public/admin
npm run tina
```

### Changes not reflecting

**Cause:** Astro's content cache

**Solution:**
```bash
# Restart Astro dev server
npm run dev
```

## Configuration

Main config file: `tina/config.ts`

Key settings:
- `build.outputFolder`: `"admin"` - Where admin UI is built
- `build.publicFolder`: `"public"` - Public assets location
- `media.publicFolder`: `"public"` - Media uploads location
- `media.tina.mediaRoot`: `"uploads"` - Upload directory

## Security Notes

- **Local mode:** No authentication required (development only)
- **Production:** Uses TinaCloud authentication
- **Never commit:** `.env` files with tokens to Git
- **Environment variables:** Set in hosting platform (Vercel/Netlify) for production

## Support

- TinaCMS Docs: https://tina.io/docs
- TinaCloud: https://app.tina.io
- FAQ: https://tina.io/docs/r/FAQ/