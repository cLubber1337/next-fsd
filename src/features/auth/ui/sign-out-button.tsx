import { UiButton } from '@/shared/ui/ui-button'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/ROUTES'

export const SignOutButton = () => {
  const router = useRouter()
  const signOut = useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      router.push(ROUTES.SIGN_IN)
    },
  })

  return (
    <UiButton
      variant="outlined"
      onClick={() => signOut.mutate({})}
      disabled={signOut.isPending}
    >
      Sign out
    </UiButton>
  )
}
