"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#dsa", label: "DSA/CP" },
    { href: "#education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 w-full border-b border-zinc-200 dark:border-zinc-800 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <Terminal className="w-6 h-6 text-cyan-500" />
          <span className="text-cyan-500">Adarsha&apos;s-Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
                href="mailto:adarsh.edurkala33@gmail.com"
                className="hidden md:block px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
                Contact Me
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-zinc-200 dark:border-zinc-800 py-4 px-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block text-lg font-medium hover:text-blue-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="mailto:adarsh.edurkala33@gmail.com"
            className="block w-full text-center px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
}
