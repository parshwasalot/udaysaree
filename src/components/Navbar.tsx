import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/uday-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Collections", path: "/collections" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const whatsappLink = "https://wa.me/919879647137?text=Hello! I'm interested in your saree collection.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-0">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-primary">
                Uday Saree
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-accent uppercase">
                Show Room
              </span>
            </div>
            <img src={logo} alt="Uday Saree Logo" className="h-[50px] sm:h-[66px] ml-[-12px] sm:ml-[-18px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  isActive(link.path)
                    ? "text-accent gold-underline"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919879647137">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="sm">
                WhatsApp
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors duration-300 ${
                    isActive(link.path) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <a href="tel:+919879647137">
                  <Button variant="outline" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" className="w-full">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
