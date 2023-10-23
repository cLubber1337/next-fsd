import { SignUpForm } from '@/features/auth'
import { UiHeader } from '@/shared/ui/ui-header'

export function SignUp() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-100">
      <UiHeader />
      <main className="flex grow flex-col px-4 pt-24">
        <div
          className="px w-full max-w-[400px] self-center rounded-xl border border-b-slate-300 bg-white p-12
        shadow"
        >
          <h1 className=" mb-10 text-center text-2xl font-semibold">Sign Up</h1>
          <SignUpForm />
        </div>
      </main>
    </div>
  )
}
