import { LanguagesIcon } from "lucide-react";
import { useLocation } from "@tanstack/react-router";
import { getPathWithoutLocale, getPrefix } from "intlayer";
import type { FC } from "react";
import { useLocale } from "react-intlayer";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocalizedLink, type To } from "./localized-link";

const languageNames: Record<string, string> = {
  id: "Bahasa",
  en: "English",
  zh: "中文",
};

const languageFlags: Record<string, string> = {
  id: "🇮🇩",
  en: "🇬🇧",
  zh: "🇨🇳",
};

export const LocaleSwitcher: FC = () => {
  const { pathname } = useLocation();
  const { availableLocales, locale, setLocale } = useLocale();
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <LanguagesIcon className="h-4 w-4" />
          <span className="sr-only">Language Toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((localeEl) => (
          <DropdownMenuItem key={localeEl} asChild>
            <LocalizedLink
              aria-current={localeEl === locale ? "page" : undefined}
              onClick={() => setLocale(localeEl)}
              params={{ locale: getPrefix(localeEl).localePrefix }}
              to={pathWithoutLocale as To}
              className="flex items-center"
            >
              <span className="mr-2">{languageFlags[localeEl]}</span>
              <span>{languageNames[localeEl]}</span>
            </LocalizedLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};