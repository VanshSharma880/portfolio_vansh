"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "home",
  "about",
  "experience",
  "technologies",
  "projects",
  "contact",
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleKeyboardNavigation = (
    e: React.KeyboardEvent,
    targetId: string,
    closeMenu = false,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      const section = document.getElementById(targetId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (closeMenu) {
        setIsMenuOpen(false);
      }
    }
  };

  if (!mounted) return null;

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`w-screen fixed top-0 left-0 px-10 py-2 flex justify-between items-center z-30
      backdrop-blur-md
      ${
        isMenuOpen
          ? "bg-white dark:bg-black"
          : "bg-white/10 dark:bg-[#0A0A0A]/10"
      }
      text-slate-900 dark:text-slate-100 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="relative inline-block">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          tabIndex={0}
          role="button"
          aria-label="Go to Home Section"
          className="flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14b8a6] rounded-md"
          onKeyDown={(e) => handleKeyboardNavigation(e, "home")}
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#14b8a6] underline">
            VANSHARMA
          </span>
        </ScrollLink>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex text-sm font-semibold items-center space-x-6">
        {navItems.map((item) => (
          <ScrollLink
            key={item}
            to={item}
            smooth
            duration={500}
            spy
            activeClass="active"
            tabIndex={0}
            role="button"
            aria-label={`Go to ${item} section`}
            className="
              cursor-pointer
              hover:text-[#14b8a6]
              focus:outline-none
              focus:ring-2
              focus:ring-[#14b8a6]
              rounded-md
              px-2
              py-1
              transition-colors
            "
            onKeyDown={(e) => handleKeyboardNavigation(e, item)}
          >
            {item.toUpperCase()}
          </ScrollLink>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="
            p-2
            rounded-full
            bg-gray-200
            dark:bg-gray-700
            text-gray-900
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-[#14b8a6]
          "
          aria-label="Toggle Dark Mode"
        >
          {resolvedTheme === "dark" ? (
            <LuSunMoon size={20} />
          ) : (
            <BsMoonStars size={20} />
          )}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          className="
            p-2
            rounded-full
            bg-gray-200
            dark:bg-gray-700
            text-gray-900
            dark:text-white
            focus:outline-none
            focus:ring-2
            focus:ring-[#14b8a6]
          "
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="absolute top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-lg rounded-md"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
                className="absolute top-6 right-6 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#14b8a6] rounded"
              >
                <HiX size={30} />
              </button>

              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth
                  duration={500}
                  spy
                  activeClass="active"
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${item} section`}
                  onClick={() => setIsMenuOpen(false)}
                  onKeyDown={(e) => handleKeyboardNavigation(e, item, true)}
                  className="
                    block
                    px-6
                    py-3
                    w-full
                    text-center
                    text-sm
                    cursor-pointer
                    hover:text-[#14b8a6]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#14b8a6]
                    rounded-md
                    transition-colors
                  "
                >
                  {item.toUpperCase()}
                </ScrollLink>
              ))}

              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="
                  p-3
                  rounded-full
                  bg-gray-200
                  dark:bg-gray-700
                  text-gray-900
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#14b8a6]
                "
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === "dark" ? (
                  <LuSunMoon size={20} />
                ) : (
                  <BsMoonStars size={20} />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
