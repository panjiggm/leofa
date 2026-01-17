import { createFileRoute } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import HeroShinjiru from '@/components/shinjiru/hero'
import AboutShinjiru from '@/components/shinjiru/about'

export const Route = createFileRoute('/{-$locale}/shinjiru')({
  component: RouteComponent,
  head: ({ params }) => {
    const metaContent = getIntlayer('shinjiru-page', params.locale)

    return {
      meta: [
        { title: metaContent.title },
        { description: metaContent.description },
      ],
    }
  },
})

function RouteComponent() {
  return (
    <div className='overflow-x-hidden'>
      <main>
        <HeroShinjiru />
        <AboutShinjiru />
      </main>
    </div>
  )
}
