"use client";

import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ReviewForm from "@/components/ReviewForm";
// import Newsletter from "@/components/Newsletter";
import StarsCanvas from "@/components/StarBackground";

import { mainFeatures, whyChooseUs, Feature } from "@/data/features";
import products, { Product } from "@/data/products";
import { motion } from "framer-motion";



const Home: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  }, []);

  // Use local data for products
  // Show only first 4 products for homepage
  const displayProducts: Product[] = products.slice(0, 4);

  return (
    <>
      {/* Navbar removed to avoid duplicate navigation bar */}
      {/* Main background wrapper - fixed position to cover entire viewport */}
      <div className="fixed inset-0 z-[-1]">
        {/* Video background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-[1]" />
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
        {/* StarsCanvas background */}
        <StarsCanvas />
      </div>
      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 pb-20 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >

        <div className="container relative mx-auto px-4 z-[5]">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Transform Your Car Photography
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Professional color grading that turns ordinary car photos into showroom-quality imagery with just one click.
            </p>
          </div>
          {/* Image Comparison Slider */}
          <div className="max-w-2xl mx-auto mb-8" id="before-after" style={{ scrollMarginTop: '80px' }}>
            <iframe
              src="/slider.html"
              title="Before After Slider"
              className="w-full aspect-video border-none rounded-lg"
              style={{ height: 'auto', minHeight: '300px' }}
            ></iframe>
            <p className="text-center mt-3 text-gray-400">
              Drag the slider to see the dramatic difference our premium LUTs make.
            </p>
          </div>


        </div>
      </motion.section>
      {/* Features Section */}
      <motion.section 
        className="py-16 bg-brand-dark" id="features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainFeatures.map((feature: Feature, index: number) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
        </div>
      </div>
    </motion.section>
      {/* LUTs Section */}
      <motion.section 
        className="py-16 relative overflow-hidden" id="luts-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Products</h2>
            <Link href="/products" className="text-brand-purple hover:underline flex items-center">
              Show all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </motion.section>
      {/* Why Choose Us */}
      <motion.section 
        className="py-16 bg-brand-dark"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature: Feature, index: number) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-brand-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-brand-purple text-xl" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Review Form */}
      <motion.section 
        className="py-16 bg-brand-dark" id="reviews" style={{ scrollMarginTop: '80px' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Share Your Experience</h2>
          <ReviewForm />
        </div>
      </motion.section>
      {/* Newsletter removed as per user request */}
    </>
  );
};

export default Home;
