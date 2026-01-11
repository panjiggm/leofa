import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project9')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/project9"!</div>
}
