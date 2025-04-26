import { ModeToggle } from '@/components/ModeToggle'
import { ModeToggle as ModeToggle2 } from '@/components/ModeToggle2'
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <ModeToggle />

      <br />
      <ModeToggle2 />
    </div>
  )
}
