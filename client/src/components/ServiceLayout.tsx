import { ReactNode } from 'react';
import { Link } from 'wouter';
import Navigation from './Navigation';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';

interface ServiceLayoutProps {
  title: string;
  description: string;
  services: Array<{
    name: string;
    description: string;
    price?: string;
  }>;
  children?: ReactNode;
}

export default function ServiceLayout({
  title,
  description,
  services,
  children,
}: ServiceLayoutProps) {
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
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`card-luxury group animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                      {service.price && (
                        <span className="text-primary font-bold whitespace-nowrap ml-2">
                          {service.price}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Content */}
            {children && (
              <div className="space-y-8">
                <div className="section-divider" />
                {children}
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-primary/20 text-center space-y-4 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-foreground">
                Ready to Book?
              </h3>
              <p className="text-muted-foreground">
                Schedule your appointment and experience luxury grooming at its finest.
              </p>
              <Link href="/booking" className="inline-flex items-center gap-2 btn-luxury">
                Book Appointment
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
