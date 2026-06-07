import { Link } from 'wouter';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = 2024;

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold">D</span>
              </div>
              <div>
                <div className="font-serif font-bold text-lg">Dandan</div>
                <div className="text-xs opacity-80">Barbershop</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Experience luxury grooming with our premium barbershop services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/services/hair" className="hover:opacity-100 transition-opacity">
                  Hair Services
                </Link>
              </li>
              <li>
                <Link href="/services/beard" className="hover:opacity-100 transition-opacity">
                  Beard Services
                </Link>
              </li>
              <li>
                <Link href="/services/facial" className="hover:opacity-100 transition-opacity">
                  Facial
                </Link>
              </li>
              <li>
                <Link href="/services/specialty" className="hover:opacity-100 transition-opacity">
                  Specialty
                </Link>
              </li>
              <li>
                <Link href="/services/coloring" className="hover:opacity-100 transition-opacity">
                  Coloring
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:opacity-100 transition-opacity">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:opacity-100 transition-opacity">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg">Contact</h3>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+96103125694" className="hover:opacity-100 transition-opacity">
                  +961 03 125 694
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/96103125694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/oYuMmsu3xpPpnryNA?g_st=ig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  Minyeh, Lebanon
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:abdullahdandan722@gmail.com" className="hover:opacity-100 transition-opacity">
                  abdullahdandan722@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p>Tue - Fri: 10:00 - 20:00</p>
                  <p>Sat - Sun: 10:00 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background opacity-20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-80">
          <p>&copy; {currentYear} Dandan Barbershop. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
