import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Hair Services', href: '/services/hair' },
    { label: 'Beard Services', href: '/services/beard' },
    { label: 'Facial', href: '/services/facial' },
    { label: 'Specialty', href: '/services/specialty' },
    { label: 'Coloring', href: '/services/coloring' },
    { label: 'VIP', href: '/services/vip' },
    { label: 'Book Now', href: '/booking', highlight: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg">D</span>
              {/* Decorative Moustache */}
              <svg
                className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-10 h-4 text-primary-foreground animate-moustache-twitch"
                viewBox="0 0 24 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3 Q9 1 6 3 Q3 5 0 3 M12 3 Q15 1 18 3 Q21 5 24 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-serif font-bold text-lg text-foreground flex items-center gap-1">
                Dandan
                <svg
                  className="w-6 h-4 text-primary animate-moustache-rotate"
                  viewBox="0 0 16 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2 Q6 0.5 4 2 Q2 3.5 0 2 M8 2 Q10 0.5 12 2 Q14 3.5 16 2"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-xs text-muted-foreground">Barbershop</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  link.highlight
                    ? 'btn-luxury text-sm'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
                {!link.highlight && (
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in-down">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md transition-all duration-300 ${
                  link.highlight
                    ? 'bg-primary text-primary-foreground font-semibold'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
