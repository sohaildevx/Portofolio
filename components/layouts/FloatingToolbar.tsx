"use client";
import { Home, Code,Contact, Github, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "./theme-modes";

const FloatingToolbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer">
      <div className="flex items-center gap-1 md:gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full px-3 py-2 md:px-3.5 md:py-2.5 shadow-xl">
        <div className="relative group">
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Home"
            className="p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Home className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            Home
          </span>
        </div>

        <div className="relative group">
          <button
            onClick={() => scrollToSection("projects")}
            aria-label="Projects"
            className="p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Code className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            Projects
          </span>
        </div>
        <div className="relative group">
          <button
            onClick={() => scrollToSection("contact")}
            aria-label="Contact"
            className="p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Contact className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            Contact
          </span>
        </div>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />

        <div className="relative group">
          <a
            href="https://github.com/sohaildevx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="block p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            GitHub
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://linkedin.com/in/sohailshaikh786"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="block p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            LinkedIn
          </span>
        </div>

        <div className="relative group">
          <a
            href="https://twitter.com/Sohaildevs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="block p-2.5 md:p-3.5 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
          >
            <Twitter className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 dark:bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
            X
          </span>
        </div>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1" />

             <ModeToggle />
      </div>
    </div>
  );
};

export default FloatingToolbar;
