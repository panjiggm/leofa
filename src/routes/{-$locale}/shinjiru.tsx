import HeroShinjiru from '@/components/shinjiru/hero'
import { createFileRoute } from '@tanstack/react-router'
import { getIntlayer } from 'intlayer'

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
      </main>
    </div>
  )
}
