import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/{-$locale}/privacy-policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/-$locale/privacy-policy"!</div>
}
