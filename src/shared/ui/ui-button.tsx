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
        'flex h-10 cursor-pointer select-none items-center justify-center gap-2 rounded-md px-4 transition-all disabled:cursor-auto',
        {
          primary:
            'bg-teal-500 text-white shadow shadow-teal-500/30 hover:bg-teal-600 disabled:opacity-50 ' +
            'active:bg-teal-400  disabled:hover:bg-teal-500',
          secondary:
            'bg-rose-500 text-white shadow shadow-rose-500/30 hover:bg-rose-600 active:bg-rose-400 ' +
            'disabled:opacity-50 disabled:hover:bg-rose-500',
          outlined:
            'border border-slate-300 text-black hover:bg-teal-100 hover:text-black/70 active:bg-teal-50 ',
        }[variant],
      )}
      {...props}
    >
      {children}
    </button>
  )
}
