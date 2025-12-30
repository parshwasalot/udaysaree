import { Link } from "react-router-dom";
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
}

const CollectionCard = ({ image, title, description }: CollectionCardProps) => {
  const whatsappLink = `https://wa.me/919879647137?text=Hello! I'm interested in ${title}. Please share more details.`;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-card bg-card transition-all duration-500 hover:shadow-elegant hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button variant="gold" size="sm" className="w-full mt-2">
            Enquire on WhatsApp
          </Button>
        </a>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-gold/20 border-l-[64px] border-l-transparent group-hover:border-t-gold/40 transition-colors duration-300" />
      </div>
    </div>
  );
};

const CollectionsSection = () => {
  const collections = [
    {
      image: bridalSaree,
      title: "Bridal Sarees",
      description: "Exquisite bridal collections with heavy embroidery, zari work, and rich fabrics for your special day.",
    },
    {
      image: partySaree,
      title: "Wedding & Party Wear",
      description: "Elegant designer sarees perfect for weddings, receptions, and special celebrations.",
    },
    {
      image: banarasiSaree,
      title: "Banarasi Sarees",
      description: "Traditional Banarasi sarees with intricate brocade patterns and golden zari borders.",
    },
    {
      image: dressMaterial,
      title: "Dress & Dress Materials",
      description: "Wide range of premium dress materials and ready-made dresses featuring beautiful designs.",
    },
    {
      image: festiveSaree,
      title: "Festive Collections",
      description: "Vibrant sarees for Diwali, Navratri, Holi, and all your festive celebrations.",
    },
    {
      image: cottonSaree,
      title: "Cotton & Daily Wear",
      description: "Comfortable cotton sarees with beautiful prints for everyday elegance and office wear.",
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase text-xs sm:text-sm">Our Collections</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Discover Timeless <span className="text-primary">Elegance</span>
          </h2>
          <p className="text-muted-foreground">
            From traditional bridal wear to everyday elegance, explore our curated collection 
            of premium sarees sourced from the finest weavers across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.title} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollectionCard {...collection} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/collections">
            <Button variant="maroon" size="lg">
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
