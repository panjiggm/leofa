import { LanguagesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Hardcoded known locales for reliable URL detection
const KNOWN_LOCALES: readonly string[] = ['id', 'en', 'zh']

const languageNames: Record<string, string> = {
  id: 'Bahasa',
  en: 'English',
  zh: '中文',
}

const languageFlags: Record<string, string> = {
  id: '🇮🇩',
  en: '🇬🇧',
  zh: '🇨🇳',
}

const LanguageToggle = () => {


  const handleLanguageChange = (newLocale: string) => {
   
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <LanguagesIcon className="h-4 w-4" />
          <span className="sr-only">Language Toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {KNOWN_LOCALES.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onSelect={() => handleLanguageChange(locale)}
          >
            <span className="mr-2">{languageFlags[locale]}</span>
            <span>{languageNames[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle
