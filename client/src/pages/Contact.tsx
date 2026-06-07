import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { Phone, MapPin, Clock, MessageCircle, Mail, ArrowRight } from 'lucide-react';

/**
 * Contact Page - Dandan Barbershop
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us directly',
      content: '+961 03 125 694',
      href: 'tel:+96103125694',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Message us on WhatsApp',
      content: '+961 03 125 694',
      href: 'https://wa.me/96103125694',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email',
      content: 'info@dandanbarbershop.com',
      href: 'mailto:info@dandanbarbershop.com',
    },
  ];

  const hours = [
    { day: 'Tuesday - Friday', time: '10:00 AM - 8:00 PM' },
    { day: 'Saturday - Sunday', time: '10:00 AM - 10:00 PM' },
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
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with Dandan Barbershop. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred way to contact us
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className={`card-luxury group animate-fade-in-up stagger-${
                      index + 1
                    }`}
                  >
                    <div className="space-y-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Icon size={24} />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                      <p className="text-primary font-semibold group-hover:underline">
                        {method.content}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl">
                Visit Us
              </h2>
            </div>

            {/* Hours and Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Business Hours */}
              <div className="space-y-6 animate-fade-in-up">
                <div className="flex items-start gap-4">
                  <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Business Hours</h3>
                    {hours.map((schedule, index) => (
                      <div key={index} className="space-y-1">
                        <p className="font-medium">{schedule.day}</p>
                        <p className="opacity-80">{schedule.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-6 animate-fade-in-up stagger-2">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Location</h3>
                    <p className="opacity-80">
                      Dandan Barbershop<br />
                      Minyeh, Lebanon
                    </p>
                    <p className="text-sm opacity-70">
                      Premium luxury grooming destination
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  question: 'How do I book an appointment?',
                  answer: 'You can book an appointment through our website by clicking "Book Now" or by sending us a message on WhatsApp at +961 71908722.',
                },
                {
                  question: 'What is your cancellation policy?',
                  answer: 'We ask for at least 24 hours notice for cancellations. Please contact us via WhatsApp or phone to reschedule.',
                },
                {
                  question: 'Do you offer walk-in services?',
                  answer: 'While we prefer appointments, we do accept walk-ins based on availability. For guaranteed service, we recommend booking in advance.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer: 'We accept cash and mobile payment options. Please confirm payment methods when booking your appointment.',
                },
                {
                  question: 'Are your products suitable for all hair types?',
                  answer: 'Yes, we use premium products suitable for all hair types. Our barbers will recommend the best products for your specific needs.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`card-luxury animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Ready to Experience Luxury?
            </h2>
            <p className="text-lg opacity-90">
              Book your appointment today or reach out with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-md hover:scale-105 transition-transform duration-300">
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/96171908722"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground hover:text-primary transition-all duration-300"
              >
                Message on WhatsApp
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
