"use client";
import { Button, Link, Card, CardBody, Chip } from "@heroui/react";
import Icon from "@mdi/react";
import { 
  mdiRocket, 
  mdiCodeTags, 
  mdiShieldCheck, 
  mdiLightningBolt, 
  mdiPuzzle,
  mdiCheckCircle,
  mdiArrowRight
} from "@mdi/js";

export default function Home() {
  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-32">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-theme-border bg-theme-surface/60 backdrop-blur">
            <Icon path={mdiRocket} className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-theme-text-secondary">Production-Ready Starter Template</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-theme-text">
            Build Modern Web Apps
            <br />
            <span className="text-primary">Faster Than Ever</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-theme-text-secondary text-lg sm:text-xl leading-relaxed">
            A complete starter template with Next.js 16, React 19, TypeScript, Supabase authentication, 
            HeroUI components, and Tailwind CSS v4. Everything you need to launch your next project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              as={Link} 
              color="primary" 
              size="lg"
              className="px-8 text-base font-medium"
              href="/auth/login"
              endContent={<Icon path={mdiArrowRight} className="w-5 h-5" />}
            >
              Get Started
            </Button>
            <Button 
              as={Link} 
              variant="bordered" 
              size="lg"
              className="px-8 text-base"
              href="/about"
            >
              Learn More
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <Chip variant="flat" size="sm">Next.js 16</Chip>
            <Chip variant="flat" size="sm">React 19</Chip>
            <Chip variant="flat" size="sm">TypeScript</Chip>
            <Chip variant="flat" size="sm">Supabase</Chip>
            <Chip variant="flat" size="sm">HeroUI</Chip>
            <Chip variant="flat" size="sm">Tailwind CSS v4</Chip>
          </div>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-theme-text mb-4">
          Everything You Need
        </h2>
        <p className="text-theme-text-secondary text-lg max-w-2xl mx-auto">
          Pre-configured with all the tools and patterns you need to build production-ready applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiShieldCheck} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Authentication Ready</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Pre-configured Supabase authentication with Google OAuth, protected routes, middleware, 
              and user profile management. Works in demo mode without setup.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiLightningBolt} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Modern Stack</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Built with the latest Next.js 16 App Router, React 19, and TypeScript. Includes Server 
              Components, optimized performance, and full type safety.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiPuzzle} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Beautiful UI</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Styled with HeroUI components and Tailwind CSS v4. Includes responsive header, footer, 
              and example pages. Light and dark theme support with toggle.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiCodeTags} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Type-Safe</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Full TypeScript support throughout. Type definitions for components, utilities, API routes, 
              and Supabase clients. Catch errors at compile time.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiRocket} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Demo Mode</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Works out of the box without any configuration. Explore the template structure, then 
              add Supabase credentials when ready to enable authentication.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border hover:border-primary/50 transition-colors">
          <CardBody className="p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon path={mdiCheckCircle} className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-theme-text">Production Ready</h3>
            <p className="text-theme-text-secondary text-sm leading-relaxed">
              Includes error handling, loading states, responsive design, SEO optimization, and 
              deployment configurations. Ready to ship.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>

    {/* Quick Start Section */}
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur border border-primary/20">
        <CardBody className="p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text">
              Get Started in Minutes
            </h2>
            <p className="text-theme-text-secondary text-lg">
              Clone the repository, install dependencies, and start building. No complex setup required.
            </p>
            
            <div className="bg-theme-background/50 rounded-lg p-6 text-left mt-8 border border-theme-border">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-theme-text-secondary">$</span>
                  <span className="text-theme-text">git clone &lt;repo-url&gt;</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-theme-text-secondary">$</span>
                  <span className="text-theme-text">cd next-tailwind-react-supabase-heroui</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-theme-text-secondary">$</span>
                  <span className="text-theme-text">npm install</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-theme-text-secondary">$</span>
                  <span className="text-theme-text">npm run dev</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button 
                as={Link} 
                color="primary" 
                size="lg"
                className="px-8"
                href="/auth/login"
              >
                Try Demo
              </Button>
              <Button 
                as={Link} 
                variant="bordered" 
                size="lg"
                className="px-8"
                href="/about"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </section>

    {/* CTA Section */}
    <section className="max-w-7xl mx-auto px-4 pb-20 sm:pb-32">
      <div className="text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-theme-text">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-theme-text-secondary text-lg max-w-2xl mx-auto">
          Start with a solid foundation and focus on what makes your application unique.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            as={Link} 
            color="primary" 
            size="lg"
            className="px-8 text-base font-medium"
            href="/auth/login"
            endContent={<Icon path={mdiArrowRight} className="w-5 h-5" />}
          >
            Get Started Now
          </Button>
          <Button 
            as={Link} 
            variant="bordered" 
            size="lg"
            className="px-8 text-base"
            href="/about"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  </div>
  )
}