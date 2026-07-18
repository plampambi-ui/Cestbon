# C'est Bon - Design Subscription Website

🎨 A modern, responsive booking platform for design subscription services built with React, Vite, and Tailwind CSS.

## Features

- ✅ Interactive Calendar Booking
- ✅ Real-time Form Validation
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ iCalendar Export (.ics file download)
- ✅ Modern UI with smooth animations
- ✅ FAQ with expandable sections
- ✅ Testimonials & Service showcase

## Tech Stack

- **React 19** - UI library
- **Vite 5** - Lightning fast build tool
- **Tailwind CSS 4** - Utility-first CSS
- **Lucide React** - Beautiful SVG icons

## Deploy to Vercel

This project is pre-configured for Vercel deployment:

1. Push to GitHub (already done! ✅)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `cestbon` repository
4. Click Deploy

Your site will be live in seconds!

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Customization

Edit these files to customize:

- **Email/Contact**: `src/components/Footer.jsx`
- **Pricing**: `src/components/Pricing.jsx`
- **Services**: `src/components/RecentWork.jsx`
- **Booking Times**: `src/components/BookingWidget.jsx`
- **Colors/Theme**: `tailwind.config.js`

## File Structure

```
cesson/
├── src/
│   ├── components/       # React components
│   ├── App.jsx          # Main app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite config
├── tailwind.config.js   # Tailwind config
├── vercel.json          # Vercel config
└── package.json         # Dependencies
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

Built with ❤️ for C'est Bon
