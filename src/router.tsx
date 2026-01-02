import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { deLocalizeUrl, localizeUrl } from "./paraglide/runtime.js";

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},

    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    rewrite: {
      input: ({ url }) => deLocalizeUrl(url.href),
      output: ({ url }) => localizeUrl(url.href),
    },
  })

  return router
}
