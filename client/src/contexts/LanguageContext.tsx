import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.hairServices': 'Hair Services',
    'nav.beardServices': 'Beard Services',
    'nav.facial': 'Facial',
    'nav.specialty': 'Specialty',
    'nav.coloring': 'Coloring',
    'nav.vip': 'VIP',
    'nav.bookNow': 'Book Now',
    'hero.title': 'Dandan',
    'hero.subtitle': 'Barbershop',
    'hero.description': 'Experience the pinnacle of luxury grooming. Where tradition meets contemporary elegance.',
    'hero.bookAppointment': 'Book Appointment',
    'hero.exploreServices': 'Explore Services',
    'featured.title': 'Luxury Grooming Experience',
    'featured.description': 'Step into our world of refined craftsmanship. From our elegant interior to our master barbers and premium products, every detail reflects our commitment to excellence.',
    'featured.learnMore': 'Learn More About Us',
    'services.title': 'Our Services',
    'services.description': 'Discover our comprehensive range of premium grooming services tailored to perfection.',
    'services.hairTitle': 'Hair Services',
    'services.hairDesc': 'Premium haircuts and styling',
    'services.beardTitle': 'Beard Services',
    'services.beardDesc': 'Expert beard care and grooming',
    'services.facialTitle': 'Facial & Specialty',
    'services.facialDesc': 'Luxurious facial treatments',
    'services.learnMore': 'Learn More',
    'vip.title': 'VIP Experience',
    'vip.description': 'Our exclusive VIP service combines haircut, beard grooming, facial treatment, and premium care for the ultimate luxury experience.',
    'vip.discover': 'Discover VIP Service',
    'why.title': 'Why Choose Dandan Barbershop',
    'why.expert': 'Expert Craftsmen',
    'why.expertDesc': 'Highly trained professionals with years of experience',
    'why.premium': 'Premium Products',
    'why.premiumDesc': 'Only the finest grooming products and tools',
    'why.luxury': 'Luxury Ambiance',
    'why.luxuryDesc': 'Elegant and refined atmosphere for relaxation',
    'why.personalized': 'Personalized Service',
    'why.personalizedDesc': 'Tailored treatments for your unique needs',
    'feedback.title': 'Share Your Experience',
    'feedback.description': 'Your feedback helps us maintain our commitment to excellence. Tell us about your Dandan Barbershop experience.',
    'feedback.button': 'Leave Your Feedback',
    'feedback.happyClients': 'Happy Clients',
    'feedback.rating': 'Average Rating',
    'feedback.experience': 'Years Experience',
    'cta.title': 'Ready for Your Transformation?',
    'cta.description': 'Book your appointment today and experience the pinnacle of luxury grooming.',
    'cta.bookNow': 'Book Now',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.hairServices': 'خدمات الشعر',
    'nav.beardServices': 'خدمات اللحية',
    'nav.facial': 'العناية بالوجه',
    'nav.specialty': 'خدمات متخصصة',
    'nav.coloring': 'صبغ الشعر',
    'nav.vip': 'خدمة VIP',
    'nav.bookNow': 'احجز الآن',
    'hero.title': 'ديدان',
    'hero.subtitle': 'حلاقة',
    'hero.description': 'اختبر قمة الحلاقة الفاخرة. حيث يلتقي التقليد بالأناقة المعاصرة.',
    'hero.bookAppointment': 'احجز موعد',
    'hero.exploreServices': 'استكشف الخدمات',
    'featured.title': 'تجربة الحلاقة الفاخرة',
    'featured.description': 'ادخل عالمنا من الحرفية المتقنة. من الديكور الأنيق إلى حلاقينا الماهرين والمنتجات الممتازة، كل تفصيل يعكس التزامنا بالتميز.',
    'featured.learnMore': 'تعرف على المزيد عنا',
    'services.title': 'خدماتنا',
    'services.description': 'اكتشف مجموعتنا الشاملة من خدمات الحلاقة المتميزة المصممة بعناية.',
    'services.hairTitle': 'خدمات الشعر',
    'services.hairDesc': 'قصات شعر متميزة وتصفيف',
    'services.beardTitle': 'خدمات اللحية',
    'services.beardDesc': 'عناية متخصصة بالحية',
    'services.facialTitle': 'العناية بالوجه والخدمات المتخصصة',
    'services.facialDesc': 'معالجات وجهية فاخرة',
    'services.learnMore': 'تعرف على المزيد',
    'vip.title': 'تجربة VIP',
    'vip.description': 'تجمع خدمتنا الحصرية VIP بين قص الشعر والعناية باللحية والعناية بالوجه والرعاية الممتازة للحصول على أفضل تجربة فاخرة.',
    'vip.discover': 'اكتشف خدمة VIP',
    'why.title': 'لماذا تختار حلاقة ديدان',
    'why.expert': 'حرفيون خبراء',
    'why.expertDesc': 'محترفون مدربون بعناية وذوو خبرة سنوات',
    'why.premium': 'منتجات متميزة',
    'why.premiumDesc': 'أفضل منتجات وأدوات الحلاقة فقط',
    'why.luxury': 'أجواء فاخرة',
    'why.luxuryDesc': 'أجواء أنيقة ومتقنة للاسترخاء',
    'why.personalized': 'خدمة شخصية',
    'why.personalizedDesc': 'معالجات مخصصة لاحتياجاتك الفريدة',
    'feedback.title': 'شارك تجربتك',
    'feedback.description': 'تساعدنا ملاحظاتك على الحفاظ على التزامنا بالتميز. أخبرنا عن تجربتك في حلاقة ديدان.',
    'feedback.button': 'اترك ملاحظاتك',
    'feedback.happyClients': 'عملاء سعداء',
    'feedback.rating': 'متوسط التقييم',
    'feedback.experience': 'سنوات الخبرة',
    'cta.title': 'هل أنت مستعد للتحول؟',
    'cta.description': 'احجز موعدك اليوم واختبر قمة الحلاقة الفاخرة.',
    'cta.bookNow': 'احجز الآن',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
