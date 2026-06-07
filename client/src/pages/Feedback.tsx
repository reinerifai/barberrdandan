import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Star, MessageCircle, CheckCircle, Send } from 'lucide-react';

/**
 * Feedback Page - Dandan Barbershop
 * Design Philosophy: Refined Dior Aesthetic
 * - Customer testimonials and review submission
 * - Star rating system
 * - WhatsApp integration for feedback delivery
 */

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    rating: 5,
    feedback: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Haircut',
    'Fade Haircut',
    'Beard Trim',
    'Beard Shave',
    'Beard Line Up',
    'Hair Wash',
    'Hair Styling',
    'Traditional Razor Shave',
    'Facial Treatment',
    'Face Mask',
    'Black Mask',
    'Deep Cleansing Facial',
    'Head Massage',
    'Nose Wax',
    'Ear Wax',
    'Eyebrow Shaping',
    'Hair Coloring',
    'Beard Coloring',
    'Hair Protein Treatment',
    'Hair Keratin Treatment',
    'VIP Service',
    'Haircut + Beard Trim',
    'Haircut + Beard + Facial',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'rating' ? parseInt(value) : value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.feedback) {
      alert('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message with feedback
    const stars = '⭐'.repeat(formData.rating);
    const message = `Hello Dandan Barbershop,

I would like to share my feedback:

*Name:* ${formData.name}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Rating:* ${stars} (${formData.rating}/5)

*Feedback:*
${formData.feedback}

Thank you for your excellent service!`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '96103125694';

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        service: '',
        rating: 5,
        feedback: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  // Sample testimonials
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      service: 'Haircut + Beard Trim',
      rating: 5,
      feedback: 'Exceptional service! The barbers are true professionals with great attention to detail. Highly recommend!',
    },
    {
      name: 'Karim Mansour',
      service: 'VIP Service',
      rating: 5,
      feedback: 'The VIP experience was incredible. From the ambiance to the service quality, everything was perfect.',
    },
    {
      name: 'Rami Khalil',
      service: 'Facial Treatment',
      rating: 5,
      feedback: 'Best facial treatment I\'ve ever had. The staff is knowledgeable and the products are premium quality.',
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
              Customer Feedback
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your experience at Dandan Barbershop. Your feedback helps us improve!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground">
                Real feedback from satisfied clients
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`card-luxury space-y-4 animate-fade-in-up stagger-${
                    (index % 5) + 1
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <p className="text-muted-foreground italic">
                    "{testimonial.feedback}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-16" />
              </div>
              <h2 className="text-luxury-subheading text-4xl">
                Share Your Feedback
              </h2>
              <p className="opacity-80">
                We'd love to hear about your experience
              </p>
            </div>

            {submitted ? (
              <div className="card-luxury text-center space-y-6 animate-scale-in bg-background text-foreground">
                <div className="flex justify-center">
                  <CheckCircle size={64} className="text-primary animate-pulse-subtle" />
                </div>
                <h3 className="text-2xl font-semibold">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your feedback has been sent via WhatsApp. We appreciate your kind words!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    required
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label className="block font-medium">
                    Service You Used *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    required
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <label className="block font-medium">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <Star
                          size={32}
                          className={`${
                            star <= formData.rating
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm opacity-80">
                    {formData.rating} out of 5 stars
                  </p>
                </div>

                {/* Feedback */}
                <div className="space-y-2">
                  <label className="block font-medium">
                    Your Feedback *
                  </label>
                  <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Tell us about your experience..."
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center gap-2 py-3 text-background"
                >
                  <Send size={18} />
                  Send Feedback via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Why Your Feedback Matters */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="flex justify-center">
                <div className="line-accent" />
              </div>
              <h2 className="text-luxury-subheading text-4xl text-foreground">
                Why Your Feedback Matters
              </h2>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Continuous Improvement',
                  description: 'Your feedback helps us enhance our services and maintain our high standards',
                },
                {
                  title: 'Quality Assurance',
                  description: 'We use your insights to ensure every customer receives the best experience',
                },
                {
                  title: 'Community Building',
                  description: 'Your testimonials inspire confidence in new customers and build our community',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`card-luxury text-center space-y-3 animate-fade-in-up stagger-${
                    index + 1
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
