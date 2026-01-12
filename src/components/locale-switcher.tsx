import { LanguagesIcon } from "lucide-react";
import { useLocation, useParams } from "@tanstack/react-router";
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
import { cn } from "@/lib/utils";

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
  const params = useParams({ strict: false });
  const { availableLocales, defaultLocale, setLocale } = useLocale();
  const pathWithoutLocale = getPathWithoutLocale(pathname);

  // Get current locale from route params, fallback to pathname extraction, then default
  const currentLocale = (params?.locale as string) || 
    (() => {
      const pathSegments = pathname.split("/").filter(Boolean);
      const firstSegment = pathSegments[0];
      if (firstSegment && availableLocales.includes(firstSegment as any)) {
        return firstSegment;
      }
      return defaultLocale || availableLocales[0];
    })();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <LanguagesIcon className="h-4 w-4" />
          <span className="sr-only">Language Toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableLocales.map((localeEl) => {
          const isActive = localeEl === currentLocale;
          return (
            <DropdownMenuItem key={localeEl} asChild>
              <LocalizedLink
                aria-current={isActive ? "page" : undefined}
                onClick={() => setLocale(localeEl)}
                params={{ locale: getPrefix(localeEl).localePrefix }}
                to={pathWithoutLocale as To}
                className={cn(
                  "flex items-center",
                  isActive && "bg-primary/10 text-primary font-medium"
                )}
              >
                <span className="mr-2">{languageFlags[localeEl]}</span>
                <span>{languageNames[localeEl]}</span>
              </LocalizedLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};