# Next.js + React + Supabase + HeroUI + Tailwind + TypeScript Starter

A modern, production-ready starter template for building full-stack web applications with Next.js, React, Supabase authentication, HeroUI components, Tailwind CSS, and TypeScript.

## 🚀 Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Supabase](https://supabase.com/)** - Authentication & backend
- **[HeroUI](https://heroui.com/)** - Beautiful React component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework

## ✨ Features

- 🔐 **Authentication** - Supabase OAuth (Google) with protected routes
- 🎨 **Modern UI** - HeroUI components with Tailwind CSS styling
- 📱 **Responsive Design** - Mobile-first, fully responsive layouts
- 🛡️ **Type Safety** - Full TypeScript support throughout
- 🔒 **Route Protection** - Middleware-based authentication guards
- 👤 **User Profile** - Profile management with email verification status
- 🎯 **App Router** - Next.js 16 App Router with server components
- 🌙 **Dark Mode** - Built-in dark theme support
- 📦 **Monorepo Ready** - Structured for monorepo architecture

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Supabase project ([create one here](https://supabase.com))

## 🏁 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/element-software/next-tailwind-react-supabase-heroui
cd next-tailwind-react-supabase-heroui
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
SUPABASE_SECRET_KEY=your_supabase_service_role_key

# Google OAuth (for authentication)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Google Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics_id
```

### 4. Configure Supabase

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Providers**
3. Enable **Google** provider and add your OAuth credentials
4. Add your callback URL: `http://localhost:3000/auth/callback` (for development)

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── (authenticated)/         # Authenticated route groups
│   │   ├── (gated)/             # Protected routes with auth checks
│   │   │   └── (header)/       # Routes with header layout
│   │   │       └── auth/
│   │   │           └── profile/ # User profile page
│   │   └── layout.tsx           # Authenticated layout
│   ├── auth/                    # Authentication routes
│   │   ├── login/               # Login page
│   │   ├── callback/            # OAuth callback handler
│   │   └── auth-code-error/     # Auth error page
│   ├── api/                     # API routes
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── lib/                         # Shared utilities and components
│   ├── components/              # Reusable components
│   │   ├── auth/                # Authentication components
│   │   ├── shared/              # Shared UI components
│   │   └── access/              # Access control components
│   └── supabase/                # Supabase client utilities
│       ├── client.ts            # Client-side Supabase client
│       ├── server.ts            # Server-side Supabase client
│       └── middleware.ts        # Middleware utilities
├── middleware.ts                # Next.js middleware for route protection
├── types/                       # TypeScript type definitions
└── public/                      # Static assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-types` - Type check with TypeScript

## 🔐 Authentication Flow

1. User clicks "Login" and is redirected to Google OAuth
2. After authentication, user is redirected to `/auth/callback`
3. Supabase exchanges the code for a session
4. User is redirected to their intended destination or `/auth/setup`
5. Middleware protects routes and redirects unauthenticated users to login

## 🎨 Styling

This template uses:
- **Tailwind CSS v4** for utility-first styling
- **HeroUI** components for consistent UI elements
- **Theme classes** (`theme-text`, `theme-background`, etc.) for theming
- **Dark mode** by default (configured in root layout)

## 📝 Key Features Explained

### Route Protection

Routes are protected via middleware in `middleware.ts`. Protected paths include:
- `/setup`
- `/config`
- `/api/pages`
- Top-level routes (except auth routes)

### Server Components

The template uses Next.js Server Components by default. Client components are marked with `"use client"` directive.

### Type Safety

TypeScript types are defined in the `types/` directory. User profile types are in `types/user.ts`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Make sure to set all required environment variables in your deployment platform.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [HeroUI Documentation](https://heroui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

This is a starter template. Feel free to use it for your projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js, React, Supabase, HeroUI, and Tailwind CSS.
