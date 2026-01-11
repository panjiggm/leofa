import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shinjiru')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shinjiru"!</div>
}
