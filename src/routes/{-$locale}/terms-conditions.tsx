import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/terms-conditions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/-$locale/terms-conditions"!</div>
}
