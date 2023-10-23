import { Loader } from 'lucide-react'
import clsx from 'clsx'

type UiPageSpinnerProps = {
  size?: number
  className?: string
}
export const UiPageSpinner = ({ size = 80, className }: UiPageSpinnerProps) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-gray-600/40',
        className,
      )}
    >
      <Loader
        style={{ animationDuration: '2.5s' }}
        className={'animate-spin text-teal-600'}
        size={size}
      />
    </div>
  )
}
