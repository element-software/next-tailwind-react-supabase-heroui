"use client";
import { Card, CardBody, Button, Link } from "@heroui/react";
import Icon from "@mdi/react";
import { mdiRocket, mdiCodeTags, mdiHeart, mdiShieldCheck, mdiLightningBolt, mdiPuzzle } from "@mdi/js";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-theme-border bg-theme-surface/60 backdrop-blur">
              <Icon path={mdiRocket} className="w-4 h-4 text-primary" />
              <span className="text-sm text-theme-text-secondary">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-theme-text">
              A modern starter template for your next project
            </h1>
            <p className="max-w-3xl mx-auto text-theme-text-secondary text-lg">
              Get started quickly with a production-ready template featuring Next.js, React, Supabase, HeroUI, Tailwind CSS, and TypeScript.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
          <CardBody className="p-8 sm:p-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-theme-text">About This Template</h2>
              <p className="text-theme-text-secondary text-lg leading-relaxed">
                This is a production-ready starter template designed to help you build modern web applications quickly. 
                It combines the best tools and frameworks in the React ecosystem: Next.js 16 with App Router, React 19, 
                TypeScript for type safety, Supabase for authentication and backend, HeroUI for beautiful components, and 
                Tailwind CSS v4 for styling.
              </p>
              <p className="text-theme-text-secondary text-lg leading-relaxed">
                Whether you're building a SaaS application, a dashboard, or any authenticated web app, this template provides 
                a solid foundation with authentication, protected routes, and a modern UI out of the box. You can even run it 
                in demo mode without configuring Supabase to explore the structure first.
              </p>
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-theme-text mb-4">What's Included</h2>
          <p className="text-theme-text-secondary max-w-2xl mx-auto">
            Everything you need to start building your next application right away.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6 space-y-3">
              <Icon path={mdiPuzzle} className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold text-theme-text">Modern Stack</h3>
              <p className="text-theme-text-secondary text-sm">
                Built with the latest versions of Next.js 16, React 19, and TypeScript. Includes App Router, Server Components, 
                and all the modern features you need.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6 space-y-3">
              <Icon path={mdiLightningBolt} className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold text-theme-text">Authentication Ready</h3>
              <p className="text-theme-text-secondary text-sm">
                Pre-configured with Supabase authentication including Google OAuth, protected routes, middleware, and user profile management.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6 space-y-3">
              <Icon path={mdiShieldCheck} className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold text-theme-text">Beautiful UI</h3>
              <p className="text-theme-text-secondary text-sm">
                Styled with HeroUI components and Tailwind CSS v4. Includes a responsive header, footer, and example pages 
                to get you started.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-theme-text mb-4">Key Features</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Icon path={mdiCodeTags} className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-theme-text">Type-Safe</h3>
              </div>
              <p className="text-theme-text-secondary text-sm">
                Full TypeScript support throughout the codebase. Type definitions for all components, utilities, and API routes 
                to catch errors at compile time.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-theme-surface/60 backdrop-blur border border-theme-border">
            <CardBody className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Icon path={mdiHeart} className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-theme-text">Demo Mode</h3>
              </div>
              <p className="text-theme-text-secondary text-sm">
                Works out of the box without any configuration. Run in demo mode to explore the template, then add Supabase 
                credentials when you're ready to enable authentication.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur border border-primary/20">
          <CardBody className="p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-theme-text">Ready to build something amazing?</h2>
            <p className="text-theme-text-secondary text-lg max-w-2xl mx-auto">
              Clone this template, customize it to your needs, and start building your application. 
              Check out the README for setup instructions and documentation.
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Button as={Link} color="primary" size="lg" className="px-8" href="/auth/login">
                Get Started
              </Button>
              <Button as={Link} variant="bordered" size="lg" href="/">
                Learn More
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

