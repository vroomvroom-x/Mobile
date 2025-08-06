"use client";
import React, { useEffect, useRef, useState } from "react";
import Home from "@/components/Home";
import MobileNavbar from "@/components/mobile/MobileNavbar";
import Footer from "@/components/Footer";

export default function Page() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showMobileFooter, setShowMobileFooter] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.classList.add("hide-video-bg");
      setShowMobileNavbar(false);
      setShowMobileFooter(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768 && sliderRef.current) {
      sliderRef.current.style.transform = "translateX(-100vw)";
      sliderRef.current.style.transition = "transform 0.7s cubic-bezier(0.4,0,0.2,1)";
      setTimeout(() => {
        sliderRef.current!.style.transform = "translateX(0)";
        setTimeout(() => {
          document.body.classList.remove("hide-video-bg");
          setShowMobileNavbar(true);
          setShowMobileFooter(true);
        }, 700);
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Mobile-only components */}
      <div className="md:hidden">
        <div ref={sliderRef}>
          {showMobileNavbar && <MobileNavbar />}
          {showMobileFooter && <Home />}
          {showMobileFooter && <Footer />}
        </div>
      </div>
      {/* Desktop-only component */}
      <div className="hidden md:block">
        <Home />
        <Footer />
      </div>
    </>
  );
}
