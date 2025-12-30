import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Saree Shop in Bhavnagar | Uday Saree Show Room - Cotton, Bridal & Wedding Sarees</title>
        <meta 
          name="description" 
          content="Trusted saree showroom in Bhavnagar offering bridal, wedding & festive sarees. Specializing in premium cotton sarees since 1982. Visit our showroom or enquire on WhatsApp." 
        />
        <meta 
          name="keywords" 
          content="saree shop in Bhavnagar, bridal sarees Bhavnagar, wedding saree showroom Gujarat, cotton sarees Bhavnagar, cotton saree specialist, party wear sarees" 
        />
        <link rel="canonical" href="https://udaysaree.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Uday Saree Show Room - Bhavnagar's Trusted Saree Destination" />
        <meta property="og:description" content="Discover timeless sarees for every occasion. Serving Bhavnagar with quality sarees since 1982." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ClothingStore",
            "name": "Uday Saree Show Room",
            "description": "Premium saree showroom in Bhavnagar serving customers since 1982",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3, Gautam Market, Vora Bazaar, B/H: Mahalaxmi Temple, Nr. Karachi Tailor, Opp. Jawahar Cloth Store",
              "addressLocality": "Bhavnagar",
              "addressRegion": "Gujarat",
              "postalCode": "364001",
              "addressCountry": "IN"
            },
            "telephone": "+919879647137",
            "openingHours": ["Mo-Sa 10:00-20:00"],
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <CollectionsSection />
          <WhyChooseUs />
          <Testimonials />
          <LocationSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
