"use client";

import ThemeToggle from "./ui/togglebar"; // default import
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

       
        <div className="text-lg font-bold">
          Keila
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-red-800">Home</a>
          <a href="#projects" className="hover:text-red-800">Projects</a>
          <a href="#skills" className="hover:text-red-800">Skills</a>
          <a href="#contact" className="hover:text-red-800">Contact</a>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-foreground"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-black border-t transition-all duration-300">
          <a href="#home" className="hover:text-red-800" onClick={() => setOpen(false)}>Home</a>
          <a href="#projects" className="hover:text-red-800" onClick={() => setOpen(false)}>Projects</a>
          <a href="#skills" className="hover:text-red-800" onClick={() => setOpen(false)}>Skills</a>
          <a href="#contact" className="hover:text-red-800" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}