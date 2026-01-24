"use client";
import { IconMail, IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LOGO, NAV_ITEMS } from "@/src/lib/constant";

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left - Logo/Name */}
          <div className="shrink-0 cursor-pointer">
            <Link href="/">
              <div className="relative aspect-video w-28">
                <Image src={LOGO} alt="logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Middle - Nav Items (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem("")}
                className="text-gray-200 font-medium relative transition-colors duration-200"
                style={{
                  color: hoveredItem === item ? "#00CECE" : "#e5e7eb",
                }}
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                  style={{
                    width: hoveredItem === item ? "100%" : "0%",
                    backgroundColor: "#00CECE",
                  }}
                />
              </a>
            ))}
          </div>

          {/* Right - Get in Touch Button (Desktop) */}
          <div className="hidden md:flex shrink-0">
            <Button variant="primary" asChild>
              <a href="#contact">
                <IconMail size={18} />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "#000000" }}
            >
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="space-y-2 pt-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 rounded-lg text-gray-200 font-medium transition-colors duration-200 hover:bg-gray-100"
                  style={{
                    backgroundColor:
                      hoveredItem === `mobile-${item}` ? "#E0F9FA" : "transparent",
                    color: hoveredItem === `mobile-${item}` ? "#00CECE" : "#e5e7eb",
                  }}
                  onMouseEnter={() => setHoveredItem(`mobile-${item}`)}
                  onMouseLeave={() => setHoveredItem("")}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-black transition-all duration-200 hover:shadow-lg mt-4"
                style={{ backgroundColor: "#00CECE" }}
                asChild
              >
                <a href="mailto:kumaramenx108@gmail.com">
                  <IconMail size={18} />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
