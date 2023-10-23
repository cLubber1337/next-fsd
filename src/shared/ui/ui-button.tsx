import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type UiButtonProps = {
  variant?: 'primary' | 'secondary' | 'outlined'
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export const UiButton = ({
  children,
  className,
  variant = 'primary',
  ...props
}: UiButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        'px-4 h-10 rounded-md cursor-pointer flex gap-2 items-center justify-center transition-all',
        {
          primary:
            'text-white bg-teal-500 shadow shadow-teal-500/30 hover:bg-teal-600 disabled:opacity-50 ' +
            'disabled:cursor-auto disabled:hover:bg-teal-500 active:bg-teal-400',
          secondary:
            'text-white bg-rose-500 shadow shadow-rose-500/30 hover:bg-rose-600 disabled:opacity-50 active:bg-rose-400',
          outlined:
            'text-black border border-slate-300 hover:bg-teal-100 active:bg-teal-50',
        }[variant]
      )}
      {...props}
    >
      {children}
    </button>
  )
}
