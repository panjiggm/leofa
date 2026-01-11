import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { IntlayerProvider, useLocale } from "react-intlayer";

import { useI18nHTMLAttributes } from "@/hooks/useI18nHTMLAttributes";
import { NotFoundComponent } from "./404";
import { validatePrefix } from "intlayer";
import { LocaleSwitcher } from "@/components/locale-switcher";

export const Route = createFileRoute("/{-$locale}")({
  component: LayoutComponent,
  notFoundComponent: NotFoundLayout,
  beforeLoad: ({ params }) => {
    // Get locale from route params (not from server headers, as beforeLoad runs on both client and server)
    const localeParam = params.locale;

    // validatePrefix checks if the locale is valid according to your intlayer config
    // Returns: { isValid: boolean, localePrefix: string }
    // - isValid: true if the prefix matches a configured locale (or is empty when prefix is optional)
    // - localePrefix: the validated prefix or the default locale prefix for redirects
    const { isValid, localePrefix } = validatePrefix(localeParam);

    if (isValid) {
      // Locale is valid, allow the route to render normally
      return;
    }

    // Invalid locale prefix (e.g., /xyz/about where "xyz" isn't a valid locale)
    // Redirect to the 404 page with a valid locale prefix
    // This ensures the 404 page is still properly localized
    throw redirect({
      to: "/{-$locale}/404",
      params: { locale: localePrefix },
    });
  },
});

function LayoutComponent() {
  useI18nHTMLAttributes();
  
  const { defaultLocale } = useLocale();
  const { locale } = Route.useParams();

  return (
    <IntlayerProvider locale={locale ?? defaultLocale}>
      <Outlet />
    </IntlayerProvider>
  );
}

// NotFoundLayout wraps the 404 component with IntlayerProvider
// This ensures translations still work on the 404 page
function NotFoundLayout() {
  const { defaultLocale } = useLocale();
  const { locale } = Route.useParams();

  return (
    <IntlayerProvider locale={locale ?? defaultLocale}>
      <NotFoundComponent />
      {/* Include LocaleSwitcher so users can change language even on 404 */}
      <LocaleSwitcher />
    </IntlayerProvider>
  );
}