import ContactDetail from '@/components/contact-us/contact-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='overflow-x-hidden'>
      <main>
        <ContactDetail />
      </main>
    </div>
  )
}
