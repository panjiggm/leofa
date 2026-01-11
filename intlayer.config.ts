import type { IntlayerConfig } from "intlayer";

import { Locales } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    defaultLocale: Locales.ENGLISH,
    locales: [Locales.ENGLISH, Locales.INDONESIAN, Locales.CHINESE],
  },
  build: {
    optimize: undefined,
    importMode: "dynamic"
  }
};

export default config;