import { createFileRoute } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import AboutProject9 from '@/components/project9/about'
import HeroProject9 from '@/components/project9/hero'

export const Route = createFileRoute('/{-$locale}/project9')({
  component: RouteComponent,
  head: ({ params }) => {
    const metaContent = getIntlayer('project9-page', params.locale)
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://leofa.co.id'
    const ogImageUrl = `${siteUrl}/og-image.webp`

    return {
      meta: [
        { title: metaContent.title },
        { name: 'description', content: metaContent.description },
        // Open Graph tags
        { property: 'og:title', content: metaContent.title },
        { property: 'og:description', content: metaContent.description },
        { property: 'og:image', content: ogImageUrl },
        { property: 'og:url', content: `${siteUrl}/${params.locale}/project9` },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Project9 - Leofa Integritas Perkasa' },
        { property: 'og:locale', content: params.locale === 'id' ? 'id_ID' : params.locale === 'zh' ? 'zh_CN' : 'en_US' },
        // Twitter Card tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: metaContent.title },
        { name: 'twitter:description', content: metaContent.description },
        { name: 'twitter:image', content: ogImageUrl },
      ],
    }
  },
})

function RouteComponent() {
  return (
    <div className='overflow-x-hidden'>
      <main>
        <HeroProject9 />
        <AboutProject9 />
      </main>
    </div>
  )
}
