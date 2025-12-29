import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  const directionsLink = "https://www.google.com/maps/dir//B%2FH:Mahalaxmi+Tempal,+3,Gautam+Market,+Vora+Bazar,+Bhavnagar,+Gujarat+364001/@21.7606783,72.1534604,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395f5b8213e4f2bd:0xe2ca06d86a2a2cea!2m2!1d72.1474786!2d21.7781401?hl=en-GB&authuser=5&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";
  const whatsappLink = "https://wa.me/919879647137?text=Hello! I'd like to know more about visiting your showroom.";

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase text-xs sm:text-sm">Visit Us</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Showroom</span>
          </h2>
          <p className="text-muted-foreground">
            Experience our collection in person. We're located in the heart of Bhavnagar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-elegant h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.054798305503!2d72.14490367505351!3d21.77814008006537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b8213e4f2bd%3A0xe2ca06d86a2a2cea!2sUday%20Saree%20Show%20Room!5e0!3m2!1sen!2sin!4v1767004371707!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Uday Saree Show Room Location"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Address Card */}
            <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Uday Saree Show Room<br />
                    3, Gautam Market, Vora Bazaar<br />
                    B/H: Mahalaxmi Temple<br />
                    Nr. Karachi Tailor, Opp. Jawahar Cloth Store<br />
                    Bhavnagar - 364001, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                  <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p className="text-sm text-gold">Closed on Sundays & Public Holidays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">Contact</h3>
                  <div className="space-y-2">
                    <a href="tel:+919879647137" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 98796 47137
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="maroon" size="lg" className="w-full gap-2 text-sm sm:text-base">
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get Directions
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="whatsapp" size="lg" className="w-full text-sm sm:text-base">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
