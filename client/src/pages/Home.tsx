import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import { ArrowRight, Scissors, Sparkles, Crown } from 'lucide-react';

/**
 * Home Page - Dandan Barbershop
 * Design Philosophy: Refined Dior Aesthetic
 * - Balanced symmetry with strategic asymmetrical elements
 * - Luxury through restraint and precision
 * - Timeless elegance with contemporary execution
 */

export default function Home() {
  const serviceCategories = [
    {
      title: 'Hair Services',
      description: 'Premium haircuts and styling',
      icon: Scissors,
      href: '/services/hair',
      delay: 'stagger-1',
    },
    {
      title: 'Beard Services',
      description: 'Expert beard care and grooming',
      icon: Sparkles,
      href: '/services/beard',
      delay: 'stagger-2',
    },
    {
      title: 'Facial & Specialty',
      description: 'Luxurious facial treatments',
      icon: Crown,
      href: '/services/facial',
      delay: 'stagger-3',
    },
  ];

  // Carousel images - stored locally in public/images
  const carouselImages = [
    {
      src: '/images/2a5e0048-c971-4fe8-9486-0f7cec8ec98c.jpeg',
      alt: 'Luxury Barbershop Interior',
    },
    {
      src: '/images/74857012-6b69-454b-8584-8ee3dcdc4db9.jpeg',
      alt: 'Expert Barber at Work',
    },
    {
      src: '/images/ad12ac17-47e3-4da5-acaf-2c5d31412db2.jpeg',
      alt: 'Premium Barber Tools',
    },
    {
      src: '/images/ce5f241e-2197-4a00-8d0f-8a5a99420f97.jpeg',
      alt: 'Barber Styling Service',
    },
    {
      src: '/images/e3a26084-f5ee-4c9c-aba1-e2ac80fda7f8.jpeg',
      alt: 'Premium Grooming Experience',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-accent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            {/* Decorative Line Top */}
            <div className="flex justify-center">
              <div className="line-accent animate-line-draw-left" />
            </div>

            {/* Main Heading */}
            <h1 className="text-luxury-heading text-5xl md:text-7xl text-foreground">
              Dandan
              <span className="block text-primary mt-2">Barbershop</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              Experience the pinnacle of luxury grooming. Where tradition meets contemporary elegance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking" className="btn-luxury inline-flex items-center justify-center gap-2">
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link href="/services/hair" className="btn-luxury-outline inline-flex items-center justify-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Decorative Line Bottom */}
            <div className="flex justify-center pt-8">
              <div className="line-accent animate-line-draw-right" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Carousel Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Carousel */}
              <div className="h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-2xl animate-fade-in-up">
                <ImageCarousel images={carouselImages} autoPlay={true} interval={5000} />
              </div>
              {/* Content */}
              <div className="space-y-6 animate-fade-in-up">
                <div className="flex justify-start">
                  <div className="h-1 bg-primary w-16" />
                </div>
                <h2 className="text-luxury-subheading text-4xl md:text-5xl">
                  Luxury Grooming Experience
                </h2>
                <p className="text-lg opacity-90">
                  Step into our world of refined craftsmanship. From our elegant interior to our master barbers and premium products, every detail reflects our commitment to excellence.
                </p>
                <div className="space-y-3 text-sm opacity-80">
                  <p>✓ Expert Master Barbers</p>
                  <p>✓ Premium Products & Tools</p>
                  <p>✓ Luxury Ambiance</p>
                </div>
                <Link href="/about" className="btn-luxury bg-background text-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl md:text-5xl text-foreground">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive range of premium grooming services tailored to perfection.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`card-luxury service-card group animate-fade-in-up ${service.delay}`}
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl md:text-5xl">
                VIP Experience
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Our exclusive VIP service combines haircut, beard grooming, facial treatment, and premium care for the ultimate luxury experience.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/services/vip" className="btn-luxury bg-background text-foreground hover:bg-primary hover:text-primary-foreground">
                Discover VIP Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl md:text-5xl text-foreground">
                Why Choose Dandan Barbershop
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Craftsmen',
                  description: 'Highly trained professionals with years of experience',
                },
                {
                  title: 'Premium Products',
                  description: 'Only the finest grooming products and tools',
                },
                {
                  title: 'Luxury Ambiance',
                  description: 'Elegant and refined atmosphere for relaxation',
                },
                {
                  title: 'Personalized Service',
                  description: 'Tailored treatments for your unique needs',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`card-luxury space-y-4 animate-fade-in-up stagger-${index + 1}`}
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl md:text-5xl">
                Share Your Experience
              </h2>
              <p className="text-lg opacity-80 max-w-2xl mx-auto">
                Your feedback helps us maintain our commitment to excellence. Tell us about your Dandan Barbershop experience.
              </p>
            </div>

            {/* Feedback CTA */}
            <div className="text-center">
              <Link href="/feedback" className="btn-luxury bg-background text-foreground hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2">
                Leave Your Feedback
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-2 animate-fade-in-up">
                  <p className="text-4xl font-serif font-bold text-primary">{stat.number}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg opacity-90">
              Book your appointment today and experience the pinnacle of luxury grooming.
            </p>
            <Link href="/booking" className="btn-luxury bg-primary-foreground text-primary hover:bg-opacity-90 inline-flex items-center gap-2">
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
