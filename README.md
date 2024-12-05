# Next Meal 🍔

A Progressive Web App (PWA) that generates random meal recipes. Simply click a button and get a complete recipe with ingredients, instructions, and cooking videos when available.

## Features

- 🎲 Random meal recipe generation
- 🌙 Dark/Light mode support
- 📱 PWA with offline support
- 🎥 YouTube video integration (when available)
- 📱 Fully responsive design
- ✨ Smooth animations

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **API:** TheMealDB
- **PWA Support:** Serwist
- **Theme:** next-themes
- **Icons:** Lucide React

## Live Demo

[View Live Demo](https://nextmeal.aleksa.io)

## Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint

# Format code
yarn prettier
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── sw.ts              # Service Worker
├── components/            # React components
│   ├── ui/               # UI components
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer component
│   └── mode-toggle.tsx   # Theme toggle
└── styles/               # Global styles
```

## PWA Features

- Offline support
- Installable on mobile and desktop
- Fast loading times
- App-like experience

## API Integration

This project uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch random meal recipes. Each recipe includes:

- Meal name and image
- List of ingredients and measurements
- Cooking instructions
- YouTube video tutorial (when available)
- Source link

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
