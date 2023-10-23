import { ShieldBan } from 'lucide-react'
import clsx from 'clsx'

type UiLogoProps = {
  className?: string
}
export function UiLogo({ className }: UiLogoProps) {
  return (
    <div className={clsx('flex items-center justify-center gap-2', className)}>
      <ShieldBan className={'h-12 w-12 text-red-900'} />
      <p className="text-2xl font-bold">Block List</p>
    </div>
  )
}
