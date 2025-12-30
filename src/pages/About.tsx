import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Heart, Gem } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Saree Shop in Bhavnagar | Uday Saree Show Room</title>
        <meta 
          name="description" 
          content="Trusted saree showroom in Bhavnagar serving customers since 1982. Family business offering bridal, wedding & festive sarees with personalized service." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-maroon-dark to-primary">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gold font-medium mb-4 tracking-wider uppercase text-sm">Our Story</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-6">
                About Uday Saree Show Room
              </h1>
              <p className="text-ivory/80 max-w-2xl mx-auto text-lg">
                Four decades of weaving trust, tradition, and timeless elegance into every saree we offer.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image/Year Display */}
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gold/20 to-maroon/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-8xl font-bold text-gradient-gold mb-4">40+</p>
                      <p className="text-2xl text-foreground font-serif">Years of Excellence</p>
                      <div className="w-24 h-1 bg-gold mx-auto mt-4" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-lg -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-lg -z-10" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    A Legacy of <span className="text-primary">Trust & Quality</span>
                  </h2>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Uday Saree Show Room was founded in 1982 with a simple vision: to bring 
                      the finest quality sarees to the women of Bhavnagar at honest prices. 
                      What started as a small family shop has grown into one of the most 
                      respected saree destinations in Gujarat.
                    </p>
                    <p>
                      Our founder believed that every woman deserves to feel beautiful, and 
                      the right saree can transform any occasion into a special memory. This 
                      philosophy continues to guide us today as we serve the third generation 
                      of our loyal customers.
                    </p>
                    <p>
                      We personally curate our collection from the finest weavers across India — 
                      from the cotton weaving centers of Gujarat to the brocade workshops of Banaras. 
                      Every saree in our showroom is selected for its quality, craftsmanship, 
                      and timeless appeal.
                    </p>
                    <p>
                      At Uday Saree Show Room, you're not just a customer — you're family. 
                      We take pride in the relationships we've built over four decades and 
                      look forward to being part of your special moments for generations to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Our <span className="text-primary">Values</span>
                </h2>
                <p className="text-muted-foreground">
                  The principles that have guided us for over four decades.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Quality First",
                    description: "We never compromise on fabric quality or craftsmanship. Only genuine products find a place in our showroom."
                  },
                  {
                    icon: Heart,
                    title: "Customer Care",
                    description: "Every customer is treated with warmth and respect. Your satisfaction is our greatest reward."
                  },
                  {
                    icon: Gem,
                    title: "Fair Pricing",
                    description: "Transparent and honest pricing with no hidden costs. Value for money is our promise."
                  },
                  {
                    icon: Users,
                    title: "Family Values",
                    description: "We treat every customer like family, building relationships that span generations."
                  }
                ].map((value, index) => (
                  <div 
                    key={value.title}
                    className="text-center p-8 bg-card rounded-lg border border-border animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
