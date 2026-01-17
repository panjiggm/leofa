import { createFileRoute } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

import AboutProject9 from '@/components/project9/about'
import HeroProject9 from '@/components/project9/hero'

export const Route = createFileRoute('/{-$locale}/project9')({
  component: RouteComponent,
  head: ({ params }) => {
    const metaContent = getIntlayer('project9-page', params.locale)

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
        <HeroProject9 />
        <AboutProject9 />
      </main>
    </div>
  )
}
