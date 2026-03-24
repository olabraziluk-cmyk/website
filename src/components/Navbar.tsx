"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-40 transition-all duration-300 rounded-2xl ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/logo-tagline.jpeg"
              alt="Ola Brazil"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-text hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Image
                src="/logo-tagline.jpeg"
                alt="Ola Brazil"
                width={40}
                height={40}
                className="rounded-full"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-semibold py-3 px-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-primary text-white"
                      : "text-text hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          </div>
        </div>
      )}
    </nav>
  );
}
