# Gulf South Homes Inc.

Modern website for Gulf South Homes Inc. - Louisiana's trusted manufactured and modular home dealer since 1995.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

This project is configured for zero-config Vercel deployment:

1. Connect this repo to Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

### Environment Variables

None required for basic deployment.

## Project Structure

```
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Home inventory data
├── public/         # Static assets (images, videos)
├── src/            # Global styles
└── index.html      # Entry point
```

## Pages

- `/` - Homepage with video hero
- `/catalog` - All homes catalog with filters
- `/single-wide` - Single-wide homes
- `/land-home` - Land & Home packages
- `/about` - About the company
- `/services` - Parts & service info
- `/contact` - Contact form
- `/catalog/:id` - Individual home details

## License

Private - Gulf South Homes Inc.
