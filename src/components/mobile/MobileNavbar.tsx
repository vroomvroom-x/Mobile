"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


import { ShoppingCart } from "lucide-react";

const WOLF_LOGO = "/attached_assets/wolf-head-purple.png"; // same as desktop
const CART_ICON = <ShoppingCart size={28} />;
const HAMBURGER_ICON = (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32" stroke="currentColor">
    <rect x="5" y="8" width="22" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="5" y="15" width="22" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="5" y="22" width="22" height="2.5" rx="1.25" fill="currentColor" />
  </svg>
);
const CLOSE_ICON = (
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const NAV_LINKS = [
  { label: "Features", path: "#", scrollId: "before-after" },
  { label: "Products", path: "/products" },
  { label: "Reviews", path: "#", scrollId: "reviews" },
];

import { useRouter } from "next/navigation";

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Desktop-style nav click handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    scrollId?: string
  ) => {
    if (scrollId) {
      e.preventDefault();
      if (window.location.pathname === "/") {
        const el = document.getElementById(scrollId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Go to home, then scroll
        window.location.href = `/${scrollId ? "#" + scrollId : ""}`;
      }
      setMenuOpen(false);
    } else if (path) {
      setMenuOpen(false);
      router.push(path);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-4 py-3 bg-black/30 backdrop-blur-md text-white fixed top-0 left-0 z-30 md:hidden">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image src={WOLF_LOGO} alt="Wolf Logo" width={36} height={36} className="h-9 w-9" priority />
          <span className="font-bold text-lg text-white">Vroom</span>
          <span className="bg-gradient-to-r from-white via-[#b993f7] to-[#a855f7] bg-clip-text text-transparent font-bold text-lg">Visions</span>
          <span className="text-[#a855f7] font-bold text-lg">X</span>
        </div>
        {/* Cart and Hamburger */}
        <div className="flex items-center gap-4">
          <Link href="/cart" aria-label="Cart" className="hover:text-purple-400">{CART_ICON}</Link>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="focus:outline-none"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {HAMBURGER_ICON}
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      {/* Overlay Menu with animated hamburger to X */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Centered Box */}
          <div className="relative flex flex-col items-center justify-center w-11/12 max-w-xs min-h-[220px] bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 animate-fadeIn">
            <button
              className="absolute top-4 right-4 text-white hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              {CLOSE_ICON}
            </button>
            <div className="flex flex-col items-center gap-8 w-full mt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors w-full text-center"
                  onClick={e => handleNavClick(e, link.path, link.scrollId)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <style jsx>{`
            .animate-fadeIn {
              animation: fadeInBox 0.25s cubic-bezier(0.4,0,0.2,1);
            }
            @keyframes fadeInBox {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
