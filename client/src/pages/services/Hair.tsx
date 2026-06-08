import ServiceLayout from '@/components/ServiceLayout';

/**
 * Hair Services Page
 * Design Philosophy: Refined Dior Aesthetic
 * - Organized service listing with elegant typography
 * - Strategic use of green accents for premium feel
 * - Smooth animations on scroll
 */

export default function HairServices() {
  const hairServices = [
    {
      name: 'Haircut',
      description: 'Classic and contemporary haircut styles tailored to your preferences',
    },
    {
      name: 'Fade Haircut',
      description: 'Precision fade haircut with clean lines and professional finish',
    },
    {
      name: 'Hair Wash',
      description: 'Luxurious hair wash with premium products and scalp massage',
    },
    {
      name: 'Hair Styling',
      description: 'Expert styling for any occasion with professional-grade products',
    },
  ];

  return (
    <ServiceLayout
      title="Hair Services"
      description="Elevate your look with our premium hair services. From classic cuts to modern styles, our expert barbers deliver precision and sophistication."
      services={hairServices}
    >
      <div className="space-y-6">
        <div className="card-luxury animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Why Choose Our Hair Services?
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Expert barbers with years of experience</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Premium hair care products</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Personalized consultation and styling</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Relaxing and luxurious environment</span>
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
}
