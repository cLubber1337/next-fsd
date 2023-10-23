import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiButton } from '@/shared/ui/ui-button'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignUp } from '@/shared/api/generated'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants/ROUTES'
import { UiLink } from '@/shared/ui/ui-link'
import { toast } from 'react-toastify'

type SignUpFormType = {
  email: string
  password: string
}
export function SignUpForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>()

  const signUp = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.SIGN_IN)
      toast.success('Success')
    },
    onError() {
      toast.error('Sign up failed')
    },
  })
  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    signUp.mutate(data)
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
      <UiButton disabled={signUp.isPending} className="mt-4" type={'submit'}>
        Sign up
      </UiButton>
      <p className="mt-4 text-center">Already have an account?</p>
      <UiLink className="text-center" href={ROUTES.SIGN_IN}>
        Sign in
      </UiLink>
    </form>
  )
}
