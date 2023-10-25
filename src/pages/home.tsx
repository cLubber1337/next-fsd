import { UiHeader } from '@/shared/ui/ui-header'
import { SignOutButton } from '@/features/auth'
import { useSessionQuery } from '@/entities/session'
import { ToggleBlockingButton } from '@/features/toggle-blocking/ui/toggle-blocking-button'

export function Home() {
  const { data } = useSessionQuery()

  return (
    <div className={'min-h-screen'}>
      <UiHeader
        right={
          <div className="flex gap-3">
            <span className="self-center">{data?.email}</span>
            <SignOutButton />
          </div>
        }
      />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="p-5">
          <ToggleBlockingButton />
        </aside>
        <main>

        </main>
      </div>
    </div>
  )
}
