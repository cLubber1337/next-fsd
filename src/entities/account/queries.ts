import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from '@/shared/api/generated'

const queryKey = ['account']
export function useAccountQuery() {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey,
  })
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess: async () =>
      await queryClient.invalidateQueries({
        queryKey,
      }),
  })
}
