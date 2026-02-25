import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-showroom.jpg";

const Hero = () => {
  const whatsappLink = "https://wa.me/919879647137?text=Hello! I'm interested in your saree collection.";

  return (
    <section data-section-name="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark/90 via-maroon-dark/70 to-transparent" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full border border-gold/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-sm font-medium">Serving Bhavnagar Since 1982</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6 animate-slide-up">
            Best Saree Shop in Bhavnagar{" "}
            <span className="text-gradient-gold">Since 1982</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-ivory/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Discover our exquisite collection of handpicked sarees — from bridal elegance
            to everyday grace. Trusted by families across Bhavnagar for over four decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'whatsapp_click',
                    event_category: 'engagement',
                    event_label: 'Hero Section - Main CTA',
                    value: 1
                  });
                }
              }}
            >
              <Button variant="whatsapp" size="xl" className="w-full gap-2 sm:gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </Button>
            </a>
            <a
              href="#location"
              className="w-full sm:w-auto"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'button_click',
                    event_category: 'engagement',
                    event_label: 'Hero - Visit Showroom',
                    value: 1
                  });
                }
              }}
            >
              <Button variant="hero-outline" size="xl" className="w-full">
                Visit Our Showroom
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-ivory/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">40+</p>
              <p className="text-ivory/70 text-xs sm:text-sm">Years of Trust</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">10,000+</p>
              <p className="text-ivory/70 text-xs sm:text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-gold">5000+</p>
              <p className="text-ivory/70 text-xs sm:text-sm">Saree Varieties</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>*/}
    </section>
  );
};

export default Hero;
