"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          {/* Small logo + title; removed `fill` to prevent overlay */}
          <div className="flex items-center gap-3">
            {/* optional: remove Image completely if you don't want any image */}
            <Image
              src="/projectimg/mind.jpg"
              alt="Mohit.dev logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <SheetTitle className="text-left text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Mohit.dev</SheetTitle>
          </div>
        </SheetHeader>

        {/* Menu list */}
        <nav className="flex flex-col space-y-6 mt-10">
          <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleLinkClick}> About</Link>
          <Link href="#projects" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleLinkClick}> Projects</Link>
          <Link href="#blog" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleLinkClick}> Blog</Link>
          <Link href="#tech" className="text-lg font-medium hover:text-primary transition-colors" onClick={handleLinkClick}>Tech Stack</Link>

          {/* Fix the resume link (remove extra leading slash) */}
          <a href="https://docs.google.com/document/d/1R7qdHEH-orlh2CugtrbpeiH3N3L8vWFg/edit" target="_blank" className="inline-block w-full mt-4 px-4 py-2 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition" onClick={handleLinkClick}
          >Resume</a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
