"use client";

import { FaLinkedin, FaEnvelope, FaGithub} from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-5xl font-bold mb-16">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Form */}
        <form className="flex-[3] flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded border border-border bg-card text-foreground h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-red-800 hover:scale-105 transition-transform duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Socials */}
        <div className="flex-[1] flex flex-col gap-4 justify-center items-center">
          <h3 className="text-xl font-semibold mb-4">Connect with me:</h3>
          <div className="flex gap-6 text-3xl">
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
            className="hover:text-red-700 hover:scale-110 transition-transform duration-200"
        >
            <FaGithub />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}