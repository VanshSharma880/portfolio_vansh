"use client";
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BsMoonStars } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-screen fixed top-0 left-0 bg-white/10 backdrop-blur-md dark:bg-[#0A0A0A]/10 text-slate-900 dark:text-slate-100 px-10 py-2 flex justify-between items-center z-30">
      <div className="relative inline-block">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#14b8a6] underline">
            VANSHARMA
          </span>
        </ScrollLink>
      </div>

      <div className="hidden md:flex text-sm font-semibold items-center space-x-6">
        {[
          "home",
          "about",
          "experience",
          "technologies",
          "projects",
          "contact",
        ].map((item) => (
          <ScrollLink
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#14b8a6] transition-colors"
            activeClass="active"
            spy={true}
          >
            {item.toUpperCase()}
          </ScrollLink>
        ))}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
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
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/10 backdrop-blur-md dark:bg-slate-900/10 shadow-lg rounded-md"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              <HiX
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-slate-900 dark:text-white cursor-pointer"
                size={30}
              />
              {[
                "home",
                "about",
                "experience",
                "techstack",
                "projects",
                "contact",
              ].map((item) => (
                <ScrollLink
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block px-6 py-3 w-full text-center text-sm cursor-pointer hover:text-[#14b8a6] transition-colors"
                  activeClass="active"
                  spy={true}
                >
                  {item.toUpperCase()}
                </ScrollLink>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors mt-4"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
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
};

export default Navbar;
