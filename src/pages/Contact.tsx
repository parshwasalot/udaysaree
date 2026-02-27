import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/919879647137?text=Hello! I'd like to enquire about your saree collection.";
  const directionsLink = "https://www.google.com/maps/dir//B%2FH:Mahalaxmi+Tempal,+3,Gautam+Market,+Vora+Bazar,+Bhavnagar,+Gujarat+364001/@21.7606783,72.1534604,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395f5b8213e4f2bd:0xe2ca06d86a2a2cea!2m2!1d72.1474786!2d21.7781401?hl=en-GB&authuser=5&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <Helmet>
        <title>Contact - Saree Shop in Bhavnagar | Visit Uday Saree Show Room</title>
        <meta
          name="description"
          content="Visit Uday Saree Show Room in Bhavnagar at Gautam Market, Vora Bazaar. Contact on WhatsApp for enquiries. Open Mon-Sat 10AM-8PM."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-maroon-dark to-primary">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gold font-medium mb-4 tracking-wider uppercase text-xs sm:text-sm">Get in Touch</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 sm:mb-6">
                Visit Our Showroom
              </h1>
              <p className="text-ivory/80 max-w-2xl mx-auto text-base sm:text-lg">
                We'd love to help you find the perfect saree. Visit us or reach out on WhatsApp for enquiries.
              </p>
            </div>
          </section>

          {/* Contact Info & Map */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Information */}
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                      Contact Information
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      We're here to help! Reach out to us through any of the following channels.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4 sm:space-y-6">
                    {/* Address */}
                    <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                            Showroom Address
                          </h3>
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

                    {/* Phone */}
                    <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                            Phone Numbers
                          </h3>
                          <div className="space-y-1">
                            <a
                              href="tel:+919879647137"
                              className="block text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                              onClick={() => {
                                if (typeof window !== 'undefined') {
                                  window.dataLayer = window.dataLayer || [];
                                  window.dataLayer.push({
                                    event: 'phone_call_click',
                                    event_category: 'engagement',
                                    event_label: 'Contact Page',
                                    value: 1
                                  });
                                }
                              }}
                            >
                              +91 98796 47137 (Mobile/WhatsApp)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                            Business Hours
                          </h3>
                          <div className="text-muted-foreground text-sm sm:text-base space-y-1">
                            <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                            <p className="text-gold text-sm mt-2">Closed on Sundays & Public Holidays</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="p-4 sm:p-6 bg-card rounded-lg border border-border shadow-card">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                            Email
                          </h3>
                          <a
                            href="mailto:udaysareeshowroom@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                            onClick={() => {
                              if (typeof window !== 'undefined') {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                  event: 'email_click',
                                  event_category: 'engagement',
                                  event_label: 'Contact Page - Email',
                                  value: 1
                                });
                              }
                            }}
                          >
                            udaysareeshowroom@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="whatsapp" size="lg" className="w-full gap-2 text-sm sm:text-base">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Chat on WhatsApp
                      </Button>
                    </a>
                    <a
                      href={directionsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="maroon" size="lg" className="w-full gap-2 text-sm sm:text-base">
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-elegant h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.054798305503!2d72.14490367505351!3d21.77814008006537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b8213e4f2bd%3A0xe2ca06d86a2a2cea!2sUday%20Saree%20Show%20Room!5e0!3m2!1sen!2sin!4v1767004371707!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Uday Saree Show Room Location"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
                {[
                  {
                    question: "Can I book an appointment for bridal saree shopping?",
                    answer: "Absolutely! We recommend booking an appointment for bridal shopping so we can give you personalized attention. Contact us on WhatsApp to schedule."
                  },
                  {
                    question: "Do you ship sarees outside Bhavnagar?",
                    answer: "Currently, we primarily serve walk-in customers at our showroom. However, please contact us on WhatsApp for special arrangements."
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept cash, all major UPI payments (GPay, PhonePe, Paytm), and bank transfers. We do not accept card payments at this time."
                  },
                  {
                    question: "Do you offer custom blouse stitching?",
                    answer: "No, we do not provide custom blouse stitching services. We surely can recommend skilled tailors in the area if needed."
                  }
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-6 bg-card rounded-lg border border-border"
                  >
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {faq.answer}
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

export default Contact;
