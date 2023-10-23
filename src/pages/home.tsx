import { UiHeader } from '@/shared/ui/ui-header'
import { SignOutButton } from '@/features/auth'
import { useSessionQuery } from '@/entities'

export function Home() {
  const { data } = useSessionQuery()

  return (
    <main className={'min-h-screen'}>
      <UiHeader
        right={
          <div className="flex gap-3">
            <span className="self-center">{data?.email}</span>
            <SignOutButton />
          </div>
        }
      />
    </main>
  )
}
