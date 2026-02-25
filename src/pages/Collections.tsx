import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bridalSaree from "@/assets/bridal-saree.jpg";
import banarasiSaree from "@/assets/banarasi-saree.jpg";
import partySaree from "@/assets/party-saree.jpg";
import dressMaterial from "@/assets/dress-material.webp";
import cottonSaree from "@/assets/cotton-saree.jpg";
import festiveSaree from "@/assets/festive-saree.jpg";

interface CollectionCardProps {
  image: string;
  title: string;
  description: string;
  features: string[];
}

const CollectionCard = ({ image, title, description, features }: CollectionCardProps) => {
  const whatsappLink = `https://wa.me/919879647137?text=Hello! I'm interested in ${title}. Please share more details and available options.`;

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-card hover:shadow-elegant transition-all duration-500">
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'whatsapp_click',
                  event_category: 'engagement',
                  event_label: `Collections Page - ${title}`,
                  value: 1
                });
              }
            }}
          >
            <Button variant="gold" size="lg" className="w-full md:w-auto">
              Enquire on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const collections = [
    {
      image: bridalSaree,
      title: "Bridal Sarees",
      description: "Make your wedding day unforgettable with our exquisite bridal collection. Each saree is crafted to perfection with intricate embroidery, rich fabrics, and timeless designs.",
      features: [
        "Heavy zari and thread embroidery",
        "Premium fabrics with rich textures",
        "Traditional red, maroon & gold colors",
        "Custom blouse stitching available"
      ]
    },
    {
      image: partySaree,
      title: "Wedding & Party Wear",
      description: "Stand out at every celebration with our stunning party wear collection. Perfect for weddings, receptions, and special occasions.",
      features: [
        "Designer sequin and mirror work",
        "Georgette and chiffon options",
        "Modern color palettes",
        "Trendy border designs"
      ]
    },
    {
      image: banarasiSaree,
      title: "Banarasi Sarees",
      description: "Experience the timeless elegance of authentic Banarasi sarees. Handwoven by master craftsmen using traditional techniques passed down through generations.",
      features: [
        "Authentic Banarasi weaving",
        "Premium fabrics with real zari",
        "Intricate brocade patterns",
        "Temple and floral motifs"
      ]
    },
    {
      image: dressMaterial,
      title: "Dress & Dress Materials",
      description: "Discover our exclusive collection of dress materials and ready-made dresses perfect for any occasion. From casual to festive, find your perfect style.",
      features: [
        "Premium quality fabrics",
        "Designer prints & embroidery",
        "Unstitched & ready-made options",
        "Traditional & contemporary designs"
      ]
    },
    {
      image: festiveSaree,
      title: "Festive Collections",
      description: "Celebrate every festival in style with our vibrant festive collection. From Diwali to Navratri, we have the perfect saree for every celebration.",
      features: [
        "Bright festive colors",
        "Traditional motifs",
        "Bandhani & leheriya styles",
        "Seasonal special designs"
      ]
    },
    {
      image: cottonSaree,
      title: "Cotton & Daily Wear",
      description: "Embrace everyday elegance with our comfortable cotton saree collection. Perfect for office wear, casual outings, and daily use.",
      features: [
        "Pure cotton & cotton blends",
        "Block print & batik designs",
        "Light and breathable fabrics",
        "Affordable pricing"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Saree Collections in Bhavnagar | Cotton, Bridal & Wedding Sarees - Uday Saree</title>
        <meta
          name="description"
          content="Explore premium cotton sarees, bridal sarees, Banarasi & wedding sarees in Bhavnagar. Wide collection of festive & party wear sarees. Enquire on WhatsApp today!"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-maroon-dark to-primary">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gold font-medium mb-4 tracking-wider uppercase text-sm">Our Collections</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-6">
                Saree Collections in Bhavnagar
              </h1>
              <p className="text-ivory/80 max-w-2xl mx-auto text-lg">
                Explore our curated collection of premium sarees sourced from the finest weavers across India.
              </p>
            </div>
          </section>

          {/* Collections */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                {collections.map((collection, index) => (
                  <div
                    key={collection.title}
                    className={`animate-slide-up ${index % 2 === 1 ? 'md:[&>div]:flex-row-reverse' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CollectionCard {...collection} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Visit our showroom to explore thousands more options. Our team will help you find the perfect saree for any occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919879647137?text=Hello! I'm looking for a specific type of saree. Can you help?"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: 'whatsapp_click',
                        event_category: 'engagement',
                        event_label: 'Collections - CTA Section',
                        value: 1
                      });
                    }
                  }}
                >
                  <Button variant="whatsapp" size="lg">
                    Chat on WhatsApp
                  </Button>
                </a>
                <a
                  href="/contact"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: 'button_click',
                        event_category: 'engagement',
                        event_label: 'Collections Page - Visit Showroom',
                        value: 1
                      });
                    }
                  }}
                >
                  <Button variant="maroon" size="lg">
                    Visit Our Showroom
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Collections;
