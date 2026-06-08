import ServiceLayout from '@/components/ServiceLayout';

/**
 * Facial Services Page
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function FacialServices() {
  const facialServices = [
    {
      name: 'Traditional Razor Shave',
      description: 'Classic straight razor shave with premium shaving cream and aftercare',
    },
    {
      name: 'Facial Treatment',
      description: 'Comprehensive facial treatment for skin rejuvenation and care',
    },
    {
      name: 'Face Mask',
      description: 'Luxurious face mask treatment for deep cleansing and hydration',
    },
    {
      name: 'Black Mask',
      description: 'Purifying black mask to remove impurities and refresh skin',
    },
    {
      name: 'Deep Cleansing Facial',
      description: 'Intensive facial cleansing for radiant and healthy-looking skin',
    },
    {
      name: 'Head Massage',
      description: 'Relaxing head and scalp massage to relieve tension',
    },
  ];

  return (
    <ServiceLayout
      title="Facial & Specialty Services"
      description="Indulge in our premium facial treatments designed to rejuvenate and refresh. Experience the ultimate in luxury skincare."
      services={facialServices}
    >
      <div className="space-y-6">
        <div className="card-luxury animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Premium Facial Care
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Professional-grade skincare products</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Expert facial treatment techniques</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Customized treatments for all skin types</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Relaxation and rejuvenation experience</span>
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
}
