import { LanguagesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getLocale, locales, type Locale, localizeHref, deLocalizeHref } from '@/paraglide/runtime'

const languageNames: Record<Locale, string> = {
  id: 'Bahasa',
  en: 'English',
  zh: '中文',
}

const languageFlags: Record<Locale, string> = {
  id: '🇮🇩',
  en: '🇬🇧',
  zh: '🇨🇳',
}

const LanguageToggle = () => {
  const currentLocale = getLocale()

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale === currentLocale) return

    // Get current path without locale prefix
    const currentPath = deLocalizeHref(window.location.pathname)
    
    // Create new localized URL with search params and hash
    const newPath = localizeHref(currentPath, { locale: newLocale })
    const newUrl = newPath + window.location.search + window.location.hash
    
    // Navigate to the new localized URL
    // This will trigger a page reload with the new locale
    window.location.href = newUrl
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <LanguagesIcon className="h-4 w-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={currentLocale === locale ? 'bg-accent' : ''}
          >
            <span className="mr-2">{languageFlags[locale]}</span>
            <span>{languageNames[locale]}</span>
            {currentLocale === locale && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle
