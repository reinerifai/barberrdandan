import ServiceLayout from '@/components/ServiceLayout';

/**
 * Specialty Services Page
 * Design Philosophy: Refined Dior Aesthetic
 */

export default function SpecialtyServices() {
  const specialtyServices = [
    {
      name: 'Nose Wax',
      description: 'Professional nose waxing for clean and groomed appearance',
    },
    {
      name: 'Ear Wax',
      description: 'Safe and effective ear waxing service',
    },
    {
      name: 'Eyebrow Shaping',
      description: 'Expert eyebrow shaping and grooming for defined features',
    },
  ];

  return (
    <ServiceLayout
      title="Specialty Services"
      description="Complete grooming with our specialized services. Attention to detail in every aspect of your appearance."
      services={specialtyServices}
    >
      <div className="space-y-6">
        <div className="card-luxury animate-fade-in-up">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Precision Grooming Details
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Professional-grade tools and techniques</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Hygienic and safe procedures</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Expert attention to facial features</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Personalized grooming recommendations</span>
            </li>
          </ul>
        </div>
      </div>
    </ServiceLayout>
  );
}
