"use client";
import { CheckCircle } from "lucide-react";
import StarsCanvas from "@/components/StarBackground";
import { Button } from "@/components/ui/button";


export default function PaymentSuccessPage() {

  return (
    <>
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
        <StarsCanvas />
      </div>
      <section 
        className="relative py-16 flex items-center justify-center min-h-screen"
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="bg-purple-900/20 backdrop-blur-md p-8 rounded-lg shadow-glow border border-white/10 max-w-md mx-auto">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-gray-300 mb-6">
              Thank you for your purchase. Your order has been processed.
            </p>
            <p className="text-gray-300 mb-6">
              Thank you for your purchase! You can download your guide below:
            </p>
            <div className="flex items-center bg-zinc-900/60 border border-white/10 rounded-lg px-4 py-3 mb-6 justify-between">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-4 4V4m8 16H4" /></svg>
                <div>
                  <div className="font-semibold text-white">Vroom.zip</div>
                  <div className="text-xs text-gray-400">ZIP Archive</div>
                </div>
              </div>
              <a href="/downloads/Vroom.zip" download className="ml-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-semibold transition-colors">Download</a>
            </div>
            <Button 
              className="bg-purple-600/70 hover:bg-purple-600 text-white py-3 rounded-md font-medium shadow-glow border border-white/10 mt-6 w-full"
              onClick={() => window.location.href = "/products"}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
