const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] bg-gradient-to-br from-maroon to-maroon-light rounded-lg overflow-hidden shadow-elegant">
                <div className="absolute inset-0 bg-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-serif text-7xl font-bold text-gold mb-2">1982</p>
                    <p className="text-primary-foreground text-lg">Established</p>
                    <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gold/10 rounded-lg -z-0" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 border-2 border-gold/30 rounded-lg -z-0" />
          </div>

          {/* Content Side */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-accent font-medium mb-2 tracking-wider uppercase text-xs sm:text-sm">Our Story</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Four Decades of{" "}
                <span className="text-primary">Trusted Excellence</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Uday Saree Show Room is a trusted name in Bhavnagar for quality sarees. 
                For over four decades, we have helped women find the perfect saree for 
                weddings, festivals, and everyday elegance.
              </p>
              <p>
                Our focus has always been genuine fabrics, fair pricing, and personal service. 
                What started as a small family shop has grown into one of the most respected 
                saree destinations in Gujarat.
              </p>
              <p>
                We believe every woman deserves to feel beautiful, and the right saree can 
                make any occasion special. Visit us to experience our warm hospitality and 
                discover your perfect drape.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold text-sm sm:text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Genuine Fabrics</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold text-sm sm:text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Fair Pricing</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold text-sm sm:text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Personal Service</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold text-sm sm:text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium text-sm sm:text-base">Family Values</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
