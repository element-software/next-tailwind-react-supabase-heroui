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
- 🔒 **Route Protection** - Route groups and middleware-based authentication guards
- 👤 **User Profile** - Profile management with email verification status
- 🎯 **App Router** - Next.js 16 App Router with server components
- 🌙 **Theme Toggle** - Light and dark theme support with persistent user preference
- 📦 **Monorepo Ready** - Structured for monorepo architecture
- 🚀 **Demo Mode** - Works without Supabase configuration for easy exploration

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
# Authentication (optional - app works without Supabase in demo mode)
# Set NEXT_PUBLIC_ENABLE_AUTH=false to disable authentication
NEXT_PUBLIC_ENABLE_AUTH=true

# Supabase Configuration (required only if authentication is enabled)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
SUPABASE_SECRET_KEY=your_supabase_service_role_key

# Google OAuth (required only if authentication is enabled)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Google Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics_id
```

> **Note:** This template can run without Supabase credentials! If you don't configure Supabase, the app will run in **demo mode** where authentication is disabled and all routes are accessible. This is perfect for exploring the template before setting up your backend.

### 4. Configure Supabase (Optional)

If you want to enable authentication:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to your Supabase project dashboard
3. Navigate to **Authentication** > **Providers**
4. Enable **Google** provider and add your OAuth credentials
5. Add your callback URL: `http://localhost:3000/auth/callback` (for development)
6. Copy your Supabase URL and keys to `.env.local`

**Demo Mode:** If you skip Supabase setup, the app will run in demo mode where:
- All routes are accessible without authentication
- Login page shows a configuration message
- Profile page displays demo data
- Perfect for exploring the template structure

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
│   ├── (authenticated)/         # Authenticated route group (requires auth)
│   │   ├── api/                 # Protected API routes
│   │   │   └── auth/           # Auth-related API endpoints
│   │   │       └── route.ts    # GET /api/auth - Get current user
│   │   ├── auth/                # Authenticated user pages
│   │   │   └── profile/        # User profile page
│   │   ├── protected/          # Protected pages (example)
│   │   ├── layout.tsx          # Authenticated layout wrapper
│   │   └── template.tsx        # Authenticated template
│   ├── (public)/               # Public route group (no auth required)
│   │   ├── api/                # Public API routes
│   │   │   └── healthcheck/   # Health check endpoint
│   │   │       └── route.ts   # GET /api/healthcheck
│   │   ├── about/              # About page
│   │   └── layout.tsx         # Public layout wrapper
│   ├── auth/                   # Authentication routes
│   │   ├── login/             # Login page
│   │   ├── callback/          # OAuth callback handler
│   │   └── auth-code-error/   # Auth error page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── template.tsx           # Root template (HeroUIProvider)
│   ├── globals.css            # Global styles
│   └── hero.ts                # HeroUI theme configuration
├── lib/                        # Shared utilities and components
│   ├── components/             # Reusable components
│   │   ├── auth/              # Authentication components
│   │   │   └── LoginForm.tsx  # Login form component
│   │   ├── pages/             # Page-specific components
│   │   │   └── home.tsx       # Home page component
│   │   ├── shared/            # Shared UI components
│   │   │   ├── header.tsx     # Header component
│   │   │   ├── footer.tsx     # Footer component
│   │   │   ├── ThemeToggle.tsx # Theme toggle button
│   │   │   ├── ThemeScript.tsx # Theme initialization script
│   │   │   └── AnalyticsWrapper.tsx # Analytics wrapper
│   │   └── access/            # Access control components
│   │       └── AccessBlocked.tsx # Access denied component
│   └── supabase/              # Supabase client utilities
│       ├── config.ts          # Supabase configuration checker
│       ├── client.ts          # Client-side Supabase client
│       ├── server.ts          # Server-side Supabase client
│       └── middleware.ts     # Middleware utilities
├── middleware.ts              # Next.js middleware for route protection
├── types/                     # TypeScript type definitions
│   └── user.ts                # User profile types
└── public/                    # Static assets
```

### Route Groups Explained

- **`(authenticated)`**: Routes in this group require authentication. The layout automatically checks for a valid user session.
  - **API Routes**: `app/(authenticated)/api/*` - Protected API endpoints that require authentication
  - **Pages**: All pages in this group are protected and require login

- **`(public)`**: Routes in this group are publicly accessible without authentication.
  - **API Routes**: `app/(public)/api/*` - Public API endpoints (e.g., health checks)
  - **Pages**: Public pages like about, landing pages, etc.

- **`auth`**: Authentication-related routes (login, callback, error pages)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run check-types` - Type check with TypeScript

## 🔐 Authentication Flow

When Supabase is configured (`NEXT_PUBLIC_ENABLE_AUTH=true` and credentials are set):

1. User clicks "Login" and is redirected to Google OAuth
2. After authentication, user is redirected to `/auth/callback`
3. Supabase exchanges the code for a session
4. User is redirected to their intended destination or `/auth/setup`
5. Middleware protects routes and redirects unauthenticated users to login

**Demo Mode:** When Supabase is not configured, authentication is disabled and all routes are accessible. The login page will show a message indicating that authentication needs to be configured.

## 🎨 Styling

This template uses:
- **Tailwind CSS v4** for utility-first styling
- **HeroUI** components for consistent UI elements
- **Theme classes** (`theme-text`, `theme-background`, etc.) for theming
- **Theme toggle** in the header to switch between light and dark modes
- **Persistent theme** - User's theme preference is saved in localStorage

## 📝 Key Features Explained

### Route Protection

Routes are protected via two mechanisms:

1. **Route Groups**: 
   - Routes in `app/(authenticated)/` are automatically protected by the authenticated layout
   - Routes in `app/(public)/` are publicly accessible

2. **Middleware** (`middleware.ts`):
   - Protects specific paths defined in the middleware configuration
   - Redirects unauthenticated users to `/auth/login`
   - Works in conjunction with route groups for comprehensive protection

**Protected API Routes:**
- `app/(authenticated)/api/*` - All API routes in this group require authentication
- Example: `/api/auth` - Returns current authenticated user

**Public API Routes:**
- `app/(public)/api/*` - Public API endpoints accessible without authentication
- Example: `/api/healthcheck` - Health check endpoint

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
