"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StarsCanvas from "@/components/StarsCanvas";

export default function ProductDetailClient({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isZoomed, setIsZoomed] = React.useState(false);

  const handleAddToCart = () => addToCart(product);
  const handleBuyNow = () => {
    addToCart(product);
    router.push("/checkout");
  };
  const goToPreviousImage = () => {
    if (!product?.imageUrl?.length) return;
    setCurrentImageIndex(prev => prev === 0 ? product.imageUrl.length - 1 : prev - 1);
  };
  const goToNextImage = () => {
    if (!product?.imageUrl?.length) return;
    setCurrentImageIndex(prev => prev === product.imageUrl.length - 1 ? 0 : prev + 1);
  };
  const handleZoomToggle = () => setIsZoomed(prev => !prev);

  return (
    <>
      {/* Background video and stars */}
      <div className="fixed inset-0 z-[-1]">
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
        <StarsCanvas />
      </div>
      <motion.section 
        className="relative py-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
        </div>
        {/* Back to products button OUTSIDE the card, above the main flex container */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-start px-2 md:px-0" style={{ marginBottom: 24, marginTop: 36 }}>
          <button
            onClick={() => router.push("/#luts-section")}
            type="button"
            className="text-gray-400 hover:text-white flex items-center"
            style={{ marginLeft: 0, alignSelf: 'flex-start' }}
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to products
          </button>
        </div>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Image carousel section */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-2xl shadow-glow border border-white/10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={product.imageUrl[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-2xl"
                  onDoubleClick={handleZoomToggle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: isZoomed ? 1.8 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.3 }}
                  style={{ cursor: isZoomed ? "zoom-out" : "zoom-in" }}
                />
              </AnimatePresence>
              {/* Zoom icon */}
              <div className="absolute top-3 right-3 bg-black/60 p-2 rounded-full z-10">
                {isZoomed ? (
                  <ZoomOut className="w-5 h-5 text-white" />
                ) : (
                  <ZoomIn className="w-5 h-5 text-white" />
                )}
              </div>
              {/* Carousel arrows */}
              {product.imageUrl.length > 1 && (
                <>
                  <button
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
                    onClick={goToPreviousImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full z-10"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              {/* Dot indicators */}
              {product.imageUrl.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                  {product.imageUrl.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Details card section */}
          <div className="flex-1 w-full max-w-lg bg-purple-900/30 rounded-2xl shadow-glow p-8 border border-white/10 backdrop-blur-md flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              {product.name}
            </h1>
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-4 h-4 ${star <= 4.5 ? "fill-current" : ""}`} />
                ))}
              </div>
              <span className="text-gray-400">(42 reviews)</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold mr-2 text-white">${(product.price / 100).toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through">${(product.originalPrice / 100).toFixed(2)}</span>
              )}
              {product.discount && (
                <span className="text-green-400 font-semibold ml-2">-{product.discount}%</span>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.compatibility?.map((comp) => (
                <Badge 
                  key={comp} 
                  variant="outline" 
                  className="bg-purple-900/10 backdrop-blur-sm border border-purple-500/30 text-xs px-2 py-0.5 rounded-full"
                >
                  {comp}
                </Badge>
              ))}
            </div>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3 mt-auto">
              <Button 
                variant="outline"
                className="bg-transparent hover:bg-purple-900/40 border border-white/20 text-white px-6 py-3 rounded-md font-medium shadow-glow"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent hover:bg-purple-900/40 border border-white/20 text-white px-6 py-3 rounded-md font-medium shadow-glow flex items-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
