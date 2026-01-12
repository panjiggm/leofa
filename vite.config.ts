import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import { intlayer, intlayerProxy } from "vite-intlayer";

const config = defineConfig({
  plugins: [
    devtools(),
    intlayerProxy(),
    nitro({
      // Configure output for Vercel deployment
      output: {
        dir: process.env.VERCEL ? '.vercel/output' : '.output',
      },
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    intlayer(),
  ],
  customLogger: {
    warn(msg, options) {
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
})

export default config
