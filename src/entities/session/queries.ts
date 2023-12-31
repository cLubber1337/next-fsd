import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const sessionKey = ['session']

export function useSessionQuery() {
  return useQuery({
    queryKey: sessionKey,
    queryFn: authControllerGetSessionInfo,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  })
}

export function useResetSession() {
  const client = useQueryClient()
  return () => client.removeQueries({ queryKey: sessionKey })
}
