import React from "react";
import ThemeChange from "./ThemeChange";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-backgroud/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined">computer</span>
          </div>
          <span className="text-xl font-bold tracking-tight">
            Jeegar Ranpura
          </span>
        </div>
        <div className="flex gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#contact"
            >
              Contact
            </a>
            <a
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
              href="#contact"
            >
              Hire Me
            </a>
          </div>
          <div>
            <ThemeChange />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
