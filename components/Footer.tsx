"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        
        {/* Left: Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} Keila Tabagan. All rights reserved.
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/keila-tabagan-bba31a296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:tabagankeila@gmail.com"
            className="hover:text-red-700 hover:scale-110 transition-transform duration-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/citanaheim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}