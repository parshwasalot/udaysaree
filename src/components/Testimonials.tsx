import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bhavnagar",
    rating: 5,
    text: "Found the most beautiful bridal saree for my wedding here! The staff was so helpful and patient. Truly a wonderful experience.",
  },
  {
    name: "Meena Patel",
    location: "Rajkot",
    rating: 5,
    text: "I've been shopping here for 15 years. The quality and variety never disappoints. My go-to place for all occasions!",
  },
  {
    name: "Anjali Desai",
    location: "Bhavnagar",
    rating: 5,
    text: "Best saree collection in Bhavnagar! Fair prices and genuine fabrics. Highly recommend to everyone.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-medium mb-2 tracking-wider uppercase text-sm">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-muted-foreground">4.9 out of 5 based on countless reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 bg-card rounded-lg border border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon to-gold flex items-center justify-center text-ivory font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Uday+Saree+Show+Room/@21.7574918,72.1545122,17z/data=!3m1!4b1!4m6!3m5!1s0x395f5b8213e4f2bd:0xe2ca06d86a2a2cea!8m2!3d21.7574918!4d72.1570871!16s%2Fg%2F11h_vw94wc?hl=en-GB&authuser=5&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
