import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiButton } from '@/shared/ui/ui-button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignIn } from '@/shared/api/generated'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants/ROUTES'
import { UiLink } from '@/shared/ui/ui-link'
import { toast } from 'react-toastify'
import { UiSpinner } from '@/shared/ui/ui-spinner'

type SignINFormType = {
  email: string
  password: string
}
export function SignInForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignINFormType>()

  const signIn = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME)
      toast.success('Success')
    },
    onError() {
      toast.error('Sign in failed')
    },
  })
  const onSubmit: SubmitHandler<SignINFormType> = (data) => {
    signIn.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <UiTextField
        label={'Email'}
        inputProps={{
          type: 'email',
          ...register('email', { required: 'required' }),
        }}
        error={errors.email?.message}
      />
      <UiTextField
        label={'Password'}
        inputProps={{
          type: 'password',
          ...register('password', {
            required: 'required',
            minLength: {
              value: 3,
              message: 'Password must have at least 3 symbols',
            },
          }),
        }}
        error={errors.password?.message}
      />
      <UiButton disabled={signIn.isPending} className="mt-4" type={'submit'}>
        {signIn.isPending ? <UiSpinner /> : 'Sign in'}
      </UiButton>
      <p className="mt-4 text-center">No account yet?</p>
      <UiLink className="text-center" href={ROUTES.SIGN_UP}>
        Sign up
      </UiLink>
    </form>
  )
}
