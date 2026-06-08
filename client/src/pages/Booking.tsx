import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, MessageCircle, CheckCircle } from 'lucide-react';

/**
 * Booking Page - Dandan Barbershop
 * Design Philosophy: Refined Dior Aesthetic
 * - Clean, organized form with elegant styling
 * - WhatsApp integration for appointment confirmation
 * - Smooth form interactions and animations
 */

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    { category: 'Hair Services', items: ['Haircut', 'Fade Haircut', 'Hair Wash', 'Hair Styling'] },
    { category: 'Beard Services', items: ['Beard Trim', 'Beard Shave', 'Beard Line Up', 'Beard Coloring'] },
    { category: 'Facial & Specialty', items: ['Traditional Razor Shave', 'Facial Treatment', 'Face Mask', 'Black Mask', 'Deep Cleansing Facial', 'Head Massage', 'Nose Wax', 'Ear Wax', 'Eyebrow Shaping'] },
    { category: 'Coloring & Treatment', items: ['Hair Coloring', 'Hair Protein Treatment', 'Hair Keratin Treatment'] },
    { category: 'Packages', items: ['Haircut + Beard Trim', 'Haircut + Beard + Facial'] },
    { category: 'VIP', items: ['VIP Service (Haircut + Beard + Facial + Premium Care)'] },
  ];

  const allServices = services.flatMap(cat => cat.items);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }

    // Create WhatsApp message
    const message = `Hello Dandan Barbershop,

I would like to book an appointment with the following details:

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service:* ${formData.service}
*Date:* ${formData.date}
*Time:* ${formData.time}
${formData.notes ? `*Notes:* ${formData.notes}` : ''}

Please confirm my appointment. Thank you!`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '96103125694'; // WhatsApp number without + or spaces

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
      setSubmitted(false);
    }, 3000);
  };

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
              Book Your Appointment
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule your luxury grooming experience with Dandan Barbershop
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="card-luxury text-center space-y-6 animate-scale-in">
                <div className="flex justify-center">
                  <CheckCircle size={64} className="text-primary animate-pulse-subtle" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Appointment Request Sent!
                </h2>
                <p className="text-muted-foreground">
                  Your appointment request has been sent to our WhatsApp. We will confirm your booking shortly.
                </p>
                <p className="text-sm text-muted-foreground">
                  Expected response time: Within 1 hour
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                {/* Personal Information */}
                <div className="card-luxury space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <User size={20} className="text-primary" />
                    Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+961 71 234 567"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="card-luxury space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <MessageCircle size={20} className="text-primary" />
                    Select Service
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      required
                    >
                      <option value="">Choose a service...</option>
                      {services.map((category) => (
                        <optgroup key={category.category} label={category.category}>
                          {category.items.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="card-luxury space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Calendar size={20} className="text-primary" />
                    Appointment Date & Time
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        required
                      >
                        <option value="">Select time...</option>
                        {['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'].map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="card-luxury space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Additional Notes</h3>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Any special requests or preferences?
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about your preferences, hair type, or any special requests..."
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-foreground font-medium">
                    📱 How it works:
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Click "Send via WhatsApp" below to send your appointment request. Our team will confirm your booking via WhatsApp within 1 hour during business hours.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center gap-2 py-3"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>

                {/* Contact Info */}
                <div className="text-center space-y-2 text-sm text-muted-foreground">
                  <p>Prefer to call? Contact us directly:</p>
                  <a href="tel:+96103125694" className="text-primary font-semibold hover:underline">
                    +961 03 125 694
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif font-bold">Business Hours</h2>
              <div className="flex justify-center">
                <div className="h-1 bg-primary w-12" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-semibold">Tuesday - Friday</p>
                <p className="text-lg opacity-80">10:00 AM - 8:00 PM</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Saturday - Sunday</p>
                <p className="text-lg opacity-80">10:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
