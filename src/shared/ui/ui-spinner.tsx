import { Loader2 } from 'lucide-react'
import clsx from 'clsx'

type UiSpinnerProps = {
  size?: number
  className?: string
}
export const UiSpinner = ({ size, className }: UiSpinnerProps) => {
  return (
    <div className={clsx(className, 'animate-spin')}>
      <Loader2 className={'text-teal-600'} size={size} />
    </div>
  )
}
