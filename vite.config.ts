import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      emitTsDeclarations: true,
      outputStructure: "message-modules",
      cookieName: "PARAGLIDE_LOCALE",
      strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en", "/en/:path(.*)?"],
          ],
        },                                 
      ],
    }),
    // Custom plugin to remove sourceMappingURL comments from Paraglide files
    {
      name: 'remove-paraglide-sourcemaps',
      transform(code, id) {
        if (id.includes('/paraglide/') && id.endsWith('.js')) {
          // Remove sourceMappingURL comments
          return {
            code: code.replace(/\/\/# sourceMappingURL=.*\.map\n?/g, ''),
            map: null,
          }
        }
      },
    },
    devtools(),
    nitro(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  customLogger: {
    warn(msg, options) {
      // Suppress source map warnings for Paraglide files
      if (
        msg.includes('Failed to load source map') &&
        (msg.includes('paraglide') || msg.includes('.js.map'))
      ) {
        return
      }
      // Use default warn for other messages
      console.warn(msg, options)
    },
    warnOnce() {},
    error(msg, options) {
      console.error(msg, options)
    },
    info() {},
    clearScreen() {},
    hasErrorLogged: () => false,
    hasWarned: false,
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    exclude: ['@inlang/paraglide-js'],
  },
})

export default config
