import { Menu, X, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logo from "figma:asset/bcdca312ad874a8bb766cd96982cabbd65187ab4.png";
import { useCart } from "../hooks/useCart";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#catalog", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full gradient-primary shadow-orange backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#checkout"
              className="gradient-secondary text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-orange-sm hover:shadow-orange hover:-translate-y-1 transition-all relative"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:inline">Cart</span>
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-white text-primary-orange border-0 h-5 min-w-5 flex items-center justify-center p-0 px-1.5">
                  {cartItemCount}
                </Badge>
              )}
            </a>
          </nav>
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="Tammy's Shades of Curls" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <h2 className="text-white hidden sm:block drop-shadow-md">
              Tammy's Shades of Curls
            </h2>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`h-0.5 w-6 bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`md:hidden gradient-primary fixed left-0 right-0 top-16 transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-center py-3 hover:bg-white/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#checkout"
              className="gradient-secondary text-white py-3 mx-4 rounded-full flex items-center justify-center gap-2 shadow-orange-sm relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="h-4 w-4" />
              Cart
              {cartItemCount > 0 && (
                <Badge className="bg-white text-primary-orange border-0">
                  {cartItemCount}
                </Badge>
              )}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
