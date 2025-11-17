"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Link as HeroUILink } from "@heroui/react";
import { ThemeToggle } from "./ThemeToggle";

export interface HeaderProps {
 public?: boolean;
}

export default function Header({ public: isPublic }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-theme-border bg-theme-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/next.svg"
              alt="Next.js Logo"
              width={120}
              height={30}
              className="h-6 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <HeroUILink
              as={Link}
              href="/"
              className="text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              Home
            </HeroUILink>
            <HeroUILink
              as={Link}
              href="/about"
              className="text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              About
            </HeroUILink>
            <HeroUILink
              as={Link}
              href="/protected"
              className="text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              Protected
            </HeroUILink>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {isPublic ? ( 
              <Button
              as={Link}
              color="primary"
              href="/auth/login"
            >
              Login
            </Button>
            ) : (
              <Button
                as={Link}
                color="primary"
                href="/auth/login"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

