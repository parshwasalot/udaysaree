import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/uday-logo.svg";

const Footer = () => {
  const whatsappLink = "https://wa.me/919879647137?text=Hello! I'm interested in your saree collection.";

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-0">
              <div>
                <h3 className="font-serif text-2xl font-bold">Uday Saree</h3>
                <p className="text-sm tracking-widest text-gold uppercase">
                  Show Room
                </p>
              </div>
              <img src={logo} alt="Uday Saree Logo" className="h-[66px] ml-[-18px]" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Serving Bhavnagar with trusted quality sarees since 1982. 
              Your destination for timeless elegance.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/udaysaree.bvn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-gold hover:text-maroon-dark transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/udaysaree.bvn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-gold hover:text-maroon-dark transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link to="/collections" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Collections
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-primary-foreground/80 text-sm">
                  3, Gautam Market, Vora Bazaar, B/H: Mahalaxmi Temple<br />
                  Nr. Karachi Tailor, Opp. Jawahar Cloth Store<br />
                  Bhavnagar - 364001, Gujarat, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+919879647137" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  +91 98796 47137
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p>Closed on Sundays & Public Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold">Get in Touch</h4>
            <p className="text-primary-foreground/80 text-sm">
              Have questions? We're here to help you find the perfect saree.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Uday Saree Show Room. All rights reserved.</p>
            <p>Bhavnagar's Trusted Saree Destination Since 1982</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
