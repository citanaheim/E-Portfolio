"use client";

import ThemeToggle from "./ui/togglebar"; // default import

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LEFT: Logo / Name */}
        <div className="text-lg font-bold">
          Keila
        </div>

        {/* RIGHT: Links + Dark Mode */}
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>

          <ThemeToggle />  {/* Works now */}
        </div>

      </div>
    </nav>
  );
}