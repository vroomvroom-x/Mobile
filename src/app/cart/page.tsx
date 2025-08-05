"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import StarsCanvas from "@/components/StarBackground";

const CartPage = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center pt-28">
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
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => router.push("/products")}>Browse Products</Button>
      </div>
    );
  }

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
      <div className="max-w-3xl mx-auto pt-28 pb-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.product.id} className="flex items-center bg-purple-900/20 rounded-lg p-4 border border-white/10">
              <Image
                src={Array.isArray(item.product.imageUrl) ? item.product.imageUrl[0] : item.product.imageUrl}
                alt={item.product.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded object-cover border border-white/10"
                unoptimized
              />
              <div className="ml-4 flex-1">
                <h2 className="font-semibold text-lg">{item.product.name}</h2>
                <div className="text-white mt-1">${((item.product.price * item.quantity) / 100).toFixed(2)}</div>
                <div className="text-xs text-gray-400">Qty: {item.quantity}</div>
              </div>
              <Button variant="ghost" className="ml-2 text-red-400" onClick={() => removeFromCart(item.product.id)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 p-4 bg-purple-900/20 rounded-lg border border-white/10">
          <span className="font-bold text-xl">Total</span>
          <span className="text-2xl font-bold text-white">${(getTotalPrice() / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-end mt-6">
          <Button className="bg-gradient-to-r from-[#7f53ac] to-[#657ced] text-white px-8 py-3 rounded-md font-semibold shadow-glow border border-white/10" onClick={() => router.push("/checkout")}>Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
