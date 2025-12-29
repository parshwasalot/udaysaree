import { Award, Users, Heart, Store, ThumbsUp, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "40+ Years of Trust",
    description: "Four decades of serving families with quality sarees and genuine service.",
  },
  {
    icon: Store,
    title: "Wide Variety",
    description: "Over 5000 saree varieties under one roof — from bridal to casual wear.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Our experienced staff helps you find the perfect saree for every occasion.",
  },
  {
    icon: Shield,
    title: "Honest Pricing",
    description: "Fair and transparent pricing with no hidden costs or surprises.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Assured",
    description: "Only genuine fabrics and authentic products from trusted sources.",
  },
  {
    icon: Users,
    title: "Family Business",
    description: "A warm, family-owned showroom where every customer is treated like family.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase text-xs sm:text-sm">Why Choose Us</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            The <span className="text-primary">Uday Difference</span>
          </h2>
          <p className="text-muted-foreground">
            Experience the warmth of a family business with the quality of a premium showroom.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 sm:p-8 bg-card rounded-lg border border-border hover:border-gold/50 hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
