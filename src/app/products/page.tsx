"use client";
import React from "react";

import ProductCard from "@/components/ProductCard";
import products from "@/data/products";

import StarsCanvas from "@/components/StarsCanvas";

const Products: React.FC = () => (
  <>
    {/* Main background wrapper - fixed position to cover entire viewport */}
    <div className="fixed inset-0 z-[-1]">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>
        <video 
          className="absolute top-0 left-0 min-w-full min-h-full object-cover opacity-80"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* 3D Stars Canvas */}
      <StarsCanvas />
    </div>
    <div className="container mx-auto px-4 py-16 relative z-10" style={{ paddingTop: '90px' }}>
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </>
);

export default Products;
