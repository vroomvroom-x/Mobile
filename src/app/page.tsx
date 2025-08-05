"use client";
import React from "react";
import Home from "@/components/Home";
import MobileNavbar from "@/components/mobile/MobileNavbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      {/* Mobile-only components */}
      <div className="md:hidden">
        <MobileNavbar />
        <Home />
        <Footer />
      </div>
      {/* Desktop-only component */}
      <div className="hidden md:block">
        <Home />
      </div>
    </>
  );
}
