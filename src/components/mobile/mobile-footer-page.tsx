"use client";
import React from "react";
import Footer from "@/components/Footer";

export default function MobileFooterPage() {
  return (
    <div className="md:hidden min-h-screen flex flex-col justify-end bg-black text-white">
      {/* Desktop Footer shown on mobile */}
      <Footer />
    </div>
  );
}
