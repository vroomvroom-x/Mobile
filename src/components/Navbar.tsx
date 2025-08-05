"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Niche ke imports apne project ke hisaab se adjust karen
import Logo from "./Logo";
import { ShoppingCart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const navItems = [
	{ label: "Features", path: "#", scrollId: "before-after" },
	{ label: "Products", path: "/products" },
	{ label: "Reviews", path: "#", scrollId: "reviews" },
];

const Navbar: React.FC = () => {
	const router = useRouter();
	const { cart } = useCart();
	const [scrolled, setScrolled] = useState(false);
	const [pendingScrollId, setPendingScrollId] = useState<string | null>(null);

	useEffect(() => {
		if (pendingScrollId && window.location.pathname === '/') {
			setTimeout(() => {
				const el = document.getElementById(pendingScrollId);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
				setPendingScrollId(null);
			}, 400);
		}
	}, [pendingScrollId]);

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, scrollId?: string) => {
		if (scrollId) {
			e.preventDefault();
			if (window.location.pathname === '/') {
				const el = document.getElementById(scrollId);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			} else {
				setPendingScrollId(scrollId);
				router.push('/');
			}
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] z-50 px-10 flex items-center transition-all duration-300 border-b border-white/10 ${
				scrolled ? "backdrop-blur-sm" : "backdrop-blur"
			}`}
		>
		<Link
			href="/"
			className="h-auto w-auto flex flex-row items-center group"
		>
			<Logo />
		</Link>
			<div className="flex-1 flex justify-center">
				<div className="flex items-center justify-center w-[420px] h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 gap-16 -ml-32">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.path}
							className="cursor-pointer text-lg font-medium transition-colors duration-200 hover:text-purple-400"
							onClick={e => handleNavClick(e, item.path, item.scrollId)}
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
			<div className="flex items-center space-x-3 ml-auto z-10">
				<a
					href="https://www.instagram.com/vroom_visionsx?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					target="_blank"
					rel="noopener noreferrer"
					className="text-white hover:text-purple-400 transition-colors"
				>
					<Instagram size={22} />
				</a>
				<Button
					variant="ghost"
					className="relative text-white hover:bg-purple-500/20 px-3 py-1 rounded-full"
					onClick={() => router.push("/cart")}
				>
					<ShoppingCart size={22} />
					{cart.length > 0 && (
						<span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full px-1.5 py-0.5">
							{cart.length}
						</span>
					)}
				</Button>
			</div>
		</nav>
	);
};

export default Navbar;
