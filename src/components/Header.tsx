"use client";

import { useState } from "react";

const navLinks = [
  { label: "關於我們", href: "#about" },
  { label: "作品展示", href: "#portfolio" },
  { label: "聯絡我們", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-brown bg-[url('/images/footer_bg.webp')] bg-[length:auto_100%] bg-center bg-repeat-x [background-blend-mode:multiply] shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-2xl font-bold text-brand-cream">
          和東佛具店
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-cream/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-0.5 w-6 bg-brand-cream transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-cream transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-brand-cream transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="border-t border-brand-cream/20 bg-brand-brown px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block py-3 text-brand-cream/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
