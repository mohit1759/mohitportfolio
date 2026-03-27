"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="p-4 flex items-center space-x-2" href="/">
          <img src="/mohit-profile-pic.jpeg" alt="Mohit Soni Profile Picture" className="w-10 h-10 rounded-full object-cover"/>
          <span className="font-bold text-xl text-blue-600">MOHIT SONI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">About</Link>
          <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
          <Link href="#experience" className="transition-colors hover:text-primary">Experience</Link>
          <Link href="#tech" className="transition-colors hover:text-primary">Tech Stack</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden md:inline-flex">
            <a href="https://drive.google.com/file/d/1EA_OG_VBrYy4O-RS4r5VejTK7Npm6WOh/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
