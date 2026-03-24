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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-40 transition-all duration-300 rounded-2xl ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex-shrink-0 cursor-pointer">
              <Image
                src="/logo-tagline.jpeg"
                alt="Ola Brazil"
                width={40}
                height={40}
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
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown — compact card below navbar */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 z-50 md:hidden bg-white rounded-2xl shadow-2xl border border-gray-100 animate-[menu-drop_0.2s_ease-out]">
            <div className="p-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-4 rounded-xl cursor-pointer transition-all duration-200 ${
                    pathname === link.href
                      ? "bg-primary text-white"
                      : "text-text hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
              <a
                href="tel:01202023216"
                className="text-xs text-muted hover:text-text transition-colors cursor-pointer"
              >
                01202 023216
              </a>
              <a
                href="https://wa.me/447487288855"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary font-semibold hover:text-primary-light transition-colors cursor-pointer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
