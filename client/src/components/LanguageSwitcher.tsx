import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

/**
 * LanguageSwitcher Component - Dandan Barbershop
 * Allows users to toggle between English and Arabic
 */

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors text-foreground hover:text-primary"
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe size={18} />
      <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}
