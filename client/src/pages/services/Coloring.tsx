import ServiceLayout from '@/components/ServiceLayout';

/**
 * Coloring Services Page
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function ColoringServices() {
  const coloringServices = [
    {
      name: 'Hair Coloring',
      description: 'Professional hair coloring with premium products and expert application',
    },
    {
      name: 'Beard Coloring',
      description: 'Specialized beard coloring to enhance and refresh your look',
    },
    {
      name: 'Hair Protein Treatment',
      description: 'Nourishing protein treatment to strengthen and restore hair',
    },
    {
      name: 'Hair Keratin Treatment',
      description: 'Advanced keratin treatment for smooth and shiny hair',
    },
  ];

  return (
    <ServiceLayout
      title="Coloring & Treatment Services"
      description="Transform your look with our professional coloring and advanced hair treatments. Premium products for superior results."
      services={coloringServices}
    >
      <div className="space-y-6">
        <div className="card-luxury animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Advanced Hair Solutions
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Premium international hair color brands</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Expert color consultation and matching</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Professional treatment application</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Hair health and shine enhancement</span>
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
}
