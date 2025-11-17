"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as HeroUILink } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-theme-border bg-theme-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row h-auto md:h-16 items-center justify-between py-6 md:py-0 gap-4 md:gap-0">
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
          <nav className="flex items-center gap-6">
            <HeroUILink
              as={Link}
              href="/"
              className="text-theme-text-secondary hover:text-theme-text transition-colors text-sm"
            >
              Home
            </HeroUILink>
            <HeroUILink
              as={Link}
              href="/about"
              className="text-theme-text-secondary hover:text-theme-text transition-colors text-sm"
            >
              About
            </HeroUILink>
            <HeroUILink
              as={Link}
              href="/protected"
              className="text-theme-text-secondary hover:text-theme-text transition-colors text-sm"
            >
              Protected
            </HeroUILink>
          </nav>

          {/* Copyright */}
          <p className="text-theme-text-secondary text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

