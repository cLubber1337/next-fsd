import { UiLogo } from '@/shared/ui/ui-logo'
import clsx from 'clsx'
import { ReactNode } from 'react'

type UiHeaderProps = {
  className?: string
  right?: ReactNode
}
export function UiHeader({ className, right }: UiHeaderProps) {
  return (
    <header
      className={clsx(
        'flex w-full items-center justify-between border-b border-b-slate-500 bg-white px-4 py-5',
        className,
      )}
    >
      <UiLogo />
      {right}
    </header>
  )
}
