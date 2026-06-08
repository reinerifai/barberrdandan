import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';

/**
 * VIP Service Page
 * Design Philosophy: Refined Dior Aesthetic
 * - Premium positioning with exclusive messaging
 * - Enhanced visual hierarchy
 * - Luxury animations and interactions
 */

export default function VIPService() {
  const vipIncludes = [
    {
      title: 'Premium Haircut',
      description: 'Expert haircut with personalized styling consultation',
    },
    {
      title: 'Beard Grooming',
      description: 'Complete beard trim, line up, and premium conditioning',
    },
    {
      title: 'Facial Treatment',
      description: 'Luxurious facial treatment with premium skincare products',
    },
    {
      title: 'Head Massage',
      description: 'Relaxing head and scalp massage for ultimate relaxation',
    },
    {
      title: 'Premium Care Package',
      description: 'Exclusive grooming products to take home',
    },
    {
      title: 'Priority Booking',
      description: 'Exclusive access to priority appointment scheduling',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="flex justify-center">
              <Crown size={48} className="animate-pulse-subtle" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              VIP Experience
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The ultimate luxury grooming package combining our finest services into one exclusive experience.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                What's Included
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need for a complete luxury grooming transformation
              </p>
            </div>

            {/* Included Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vipIncludes.map((item, index) => (
                <div
                  key={index}
                  className={`card-luxury group animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Sparkles
                        size={24}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm ml-9">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl">
                VIP Exclusive Benefits
              </h2>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Dedicated grooming specialist',
                'Personalized consultation',
                'Premium product selection',
                'Private grooming session',
                'Complimentary beverage service',
                'Exclusive VIP lounge access',
                'Priority appointment booking',
                'Special VIP pricing',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles size={16} className="text-background" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Duration */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto card-luxury text-center space-y-6 animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Duration & Pricing
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Duration:</span> 90 minutes of pure luxury
              </p>
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Experience:</span> Personalized, premium grooming at its finest
              </p>
              <p className="text-sm text-muted-foreground">
                Contact us for current pricing and availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Experience True Luxury
            </h2>
            <p className="text-lg opacity-90">
              Book your VIP experience today and discover the pinnacle of grooming excellence.
            </p>
            <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-md hover:scale-105 transition-transform duration-300">
              Book VIP Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
