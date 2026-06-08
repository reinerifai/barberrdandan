import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Award, Users, Heart, ArrowRight } from 'lucide-react';

/**
 * About Page - Dandan Barbershop
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in grooming and customer service',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building relationships with our clients through trust and quality',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to the art of barbering and personal grooming',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in-up">
            <div className="flex justify-center">
              <div className="line-accent" />
            </div>
            <h1 className="text-luxury-heading text-4xl md:text-5xl text-foreground">
              About Dandan
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our story, values, and commitment to luxury grooming
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                Our Story
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dandan Barbershop was founded with a singular vision: to bring the pinnacle of luxury grooming to our community. We believe that a great haircut and grooming experience is more than just a service—it's a ritual, a moment of self-care and transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our name, Dandan, reflects our commitment to excellence and attention to detail. Every service we provide is crafted with precision, using only the finest products and techniques. We draw inspiration from the world's most prestigious grooming traditions while maintaining a contemporary approach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Dandan, we don't just cut hair—we create experiences. Our team of expert barbers and grooming specialists are passionate about their craft, dedicated to understanding each client's unique needs and delivering results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl">
                Our Core Values
              </h2>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className={`space-y-4 text-center animate-fade-in-up stagger-${
                      index + 1
                    }`}
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon size={32} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                    <p className="opacity-80">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                Why Choose Dandan
              </h2>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Craftsmen',
                  description: 'Our barbers are highly trained professionals with years of experience in luxury grooming',
                },
                {
                  title: 'Premium Products',
                  description: 'We use only the finest international grooming products and treatments',
                },
                {
                  title: 'Personalized Service',
                  description: 'Every client receives tailored treatments based on their unique needs and preferences',
                },
                {
                  title: 'Luxury Ambiance',
                  description: 'Our sophisticated environment is designed for relaxation and comfort',
                },
                {
                  title: 'Attention to Detail',
                  description: 'We believe in precision and perfection in every service we provide',
                },
                {
                  title: 'Customer Satisfaction',
                  description: 'Your satisfaction is our priority, and we stand behind every service',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`card-luxury animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Location Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Certification */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="line-accent" />
                </div>
                <h2 className="text-luxury-subheading text-4xl text-foreground">
                  Professional Certification
                </h2>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Certificate Image */}
                <div className="flex-1">
                  <img 
                    src="/images/certification.webp" 
                    alt="Professional Barber Certification" 
                    className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                {/* Certificate Translation */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground">
                      Syndicate of Hair-Dressing Salons - Professional Certification
                    </h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        <span className="font-semibold text-foreground">Certificate Holder:</span> Abdallah Abdul Aziz Dandan
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Nationality:</span> Lebanese
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Date of Birth:</span> July 4, 1997
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Register Number:</span> 382 AL MINIEH
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Specialization:</span> Master Barber of First Category
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Experience:</span> More than 5 years in hair dressing and skin conditioning
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Affiliation:</span> Syndicate of Hair-Dressing Salons in North Lebanon (Member #890)
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Character:</span> Good character and conduct
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Issued:</span> April 12, 2019 in Tripoli
                      </p>
                      <p className="pt-4 italic border-t border-border">
                        This certificate is issued by the Syndicate President certifying that the holder is a qualified master barber with excellent professional credentials and is affiliated with the official syndicate of hair-dressing salons in North Lebanon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-8 animate-fade-in-up border-t border-border pt-16">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="line-accent" />
                </div>
                <h2 className="text-luxury-subheading text-4xl text-foreground">
                  Visit Us
                </h2>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="https://maps.app.goo.gl/oYuMmsu3xpPpnryNA?g_st=ig" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition-colors duration-300"
                >
                  Minyeh, Lebanon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Experience the Dandan Difference
            </h2>
            <p className="text-lg opacity-90">
              Join our community of satisfied clients and discover luxury grooming at its finest.
            </p>
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-md hover:scale-105 transition-transform duration-300">
              Book Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
