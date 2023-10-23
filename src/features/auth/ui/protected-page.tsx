import { PropsWithChildren, ReactElement } from 'react'
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants/ROUTES'
import { useSessionQuery } from '@/entities'

export function protectedPage<T>(Component: (props: T) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<T>) {
    const route = useRouter()

    const sessionQuery = useSessionQuery()

    if (sessionQuery.isLoading) {
      return <UiPageSpinner />
    }

    if (sessionQuery.isError) {
      route.replace(ROUTES.SIGN_IN)
    }

    return <Component {...props} />
  }
}
