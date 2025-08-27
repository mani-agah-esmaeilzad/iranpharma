# دستیار هوشمند نمایشگاه ایران فارما | IranPharma Expo Buddy - Next.js

This is the Next.js version of the IranPharma Expo Buddy application - a smart assistant for the IranPharma exhibition.

## Features

- 🤖 **Smart Chat Bot** with predefined responses in Persian
- 📱 **Fully Responsive** design for mobile and desktop
- 🎨 **Modern UI** with shadcn/ui components
- 🌟 **Smooth Animations** and transitions
- 📍 **Exhibition Information** about booths, companies, and events
- ⚡ **Next.js 14** with App Router
- 🎯 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icons
- **TanStack Query** - Data fetching and state management
- **Sonner** - Toast notifications

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── not-found.tsx    # 404 page
│   └── providers.tsx    # Client providers
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # App header
│   ├── ChatMessage.tsx # Chat messages
│   ├── ChatInput.tsx   # Message input
│   ├── SuggestedPrompts.tsx # Predefined questions
│   └── TypingIndicator.tsx  # Typing animation
├── hooks/              # React hooks
│   ├── useChat.ts      # Chat logic
│   ├── use-toast.ts    # Toast notifications
│   └── use-mobile.tsx  # Mobile detection
└── lib/
    └── utils.ts        # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type checking without emitting

## Features Overview

### Chat System
- Interactive chat interface with bot responses
- Persian language support (RTL)
- Typing indicators and smooth animations
- Predefined prompts for common questions

### Exhibition Information
The bot provides information about:
- 🏢 Exhibition booths and their locations
- ⏰ Operating hours and schedules
- 🏭 Participating companies and their products
- 🎓 Special events and seminars
- 📞 Contact information and guidance

### Design System
- Consistent color palette with HSL values
- Responsive breakpoints for all screen sizes
- Smooth animations and transitions
- Accessible UI components

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is open source and available under the MIT License.
