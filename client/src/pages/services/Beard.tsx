import ServiceLayout from '@/components/ServiceLayout';

/**
 * Beard Services Page
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function BeardServices() {
  const beardServices = [
    {
      name: 'Beard Trim',
      description: 'Precision beard trimming to maintain shape and length',
    },
    {
      name: 'Beard Shave',
      description: 'Complete beard shave with premium shaving cream and techniques',
    },
    {
      name: 'Beard Line Up',
      description: 'Sharp, clean beard line definition for a polished appearance',
    },
    {
      name: 'Beard Coloring',
      description: 'Professional beard coloring to enhance and refresh your look',
    },
  ];

  return (
    <ServiceLayout
      title="Beard Services"
      description="Master the art of beard grooming. Our expert barbers provide comprehensive beard care from trimming to styling and coloring."
      services={beardServices}
    >
      <div className="space-y-6">
        <div className="card-luxury animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Beard Care Excellence
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Specialized beard grooming techniques</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Premium beard oils and conditioners</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Custom beard styling consultation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Professional coloring services</span>
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
}
