import HeroProject9 from '@/components/project9/hero'
import { createFileRoute } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

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
      </main>
    </div>
  )
}
