"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


import { ShoppingCart } from "lucide-react";

const WOLF_LOGO = "/attached_assets/wolf-head-purple.png"; // same as desktop
// Variant 1: Simple Shopping Bag
const CART_ICON_BAG = (
  <span style={{ position: 'relative', display: 'inline-block', width: 33, height: 33, verticalAlign: 'middle' }}>
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', top: '2.5px' }}>
      <rect x="8.5" y="11" width="16" height="13" rx="4.5" stroke="currentColor" fill="none" />
      <path d="M12 11V8a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" fill="none" />
    </svg>
    <span style={{ position: 'absolute', top: 2.5, right: 2.5, width: 7.5, height: 7.5, background: '#a855f7', borderRadius: '50%', border: '2.2px solid #fff' }} />
  </span>
);

// Variant 2: Shopping Cart (Basket)
const CART_ICON_BASKET = (
  <span style={{ position: 'relative', display: 'inline-block', width: 28, height: 28, verticalAlign: 'middle' }}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', top: '2px' }}>
      <rect x="6" y="10" width="16" height="9" rx="3" stroke="currentColor" fill="none" />
      <circle cx="10" cy="22" r="2" stroke="currentColor" fill="none" />
      <circle cx="18" cy="22" r="2" stroke="currentColor" fill="none" />
      <path d="M8 10V7h12v3" stroke="currentColor" fill="none" />
    </svg>
    <span style={{ position: 'absolute', top: 2, right: 2, width: 6, height: 6, background: '#a855f7', borderRadius: '50%', border: '2px solid #fff' }} />
  </span>
);

// Variant 3: Minimal Shopping Tote
const CART_ICON_TOTE = (
  <span style={{ position: 'relative', display: 'inline-block', width: 28, height: 28, verticalAlign: 'middle' }}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', top: '2px' }}>
      <rect x="8" y="10" width="12" height="10" rx="3" stroke="currentColor" fill="none" />
      <path d="M10 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" fill="none" />
    </svg>
    <span style={{ position: 'absolute', top: 2, right: 2, width: 6, height: 6, background: '#a855f7', borderRadius: '50%', border: '2px solid #fff' }} />
  </span>
);

// Change this to try different icons:
const CART_ICON = CART_ICON_BAG;
const HAMBURGER_ICON = (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32" stroke="currentColor">
    <rect x="5" y="8" width="22" height="1.2" rx="0.6" fill="currentColor" />
    <rect x="5" y="15" width="22" height="1.2" rx="0.6" fill="currentColor" />
    <rect x="5" y="22" width="22" height="1.2" rx="0.6" fill="currentColor" />
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
        {/* Left: Hamburger only */}
        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            className="focus:outline-none"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {HAMBURGER_ICON}
          </button>
        </div>
        {/* Center: Brand text in one line */}
        <div className="flex-1 flex items-center justify-center">
          <span className="font-bold text-xl text-white mr-1" style={{ fontFamily: 'Poppins, Montserrat, Arial, sans-serif', fontWeight: 700, letterSpacing: '0.04em' }}>Vroom</span>
          <span className="bg-gradient-to-r from-white via-[#b993f7] to-[#a855f7] bg-clip-text text-transparent font-bold text-xl mr-1" style={{ fontFamily: 'Poppins, Montserrat, Arial, sans-serif', fontWeight: 700, letterSpacing: '0.04em' }}>Visions</span>
          <span className="text-[#a855f7] font-bold text-xl" style={{ fontFamily: 'Poppins, Montserrat, Arial, sans-serif', fontWeight: 700, letterSpacing: '0.04em' }}>X</span>
        </div>
        {/* Right: Cart only */}
        <div className="flex items-center">
          <Link href="/cart" aria-label="Cart" className="hover:text-purple-400">{CART_ICON}</Link>
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
                  className="text-2xl font-normal text-white hover:text-purple-400 transition-colors w-full text-center"
                  style={{ fontFamily: 'Inter, Arial, sans-serif', fontWeight: 400 }}
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
