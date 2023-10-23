import { Roboto } from 'next/font/google'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiSelect } from '@/shared/ui/ui-select'
import { UiLink } from '@/shared/ui/ui-link'
import { UiLogo } from '@/shared/ui/ui-logo'
import { UiHeader } from '@/shared/ui/ui-header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  })

  return (
    <main className={`min-h-screen ${roboto.className}`}>
      <UiHeader
        right={
          <div>
            <UiLink href={'/'}>Home page</UiLink>
            {data?.email}
          </div>
        }
      />

      <div className="px-4">
        <UiSelect
          label="Choose color"
          options={[
            { value: 'Лосось', label: 'Лосось' },
            { value: 'Окунь', label: 'Окунь' },
            { value: 'Щука', label: 'Щука' },
          ]}
        />
        <UiTextField
          label="Email"
          inputProps={{ placeholder: 'Your email...' }}
          error={'Error, error'}
        />
      </div>
    </main>
  )
}
