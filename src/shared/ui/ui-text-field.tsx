import { InputHTMLAttributes, PropsWithoutRef, useId } from 'react'
import clsx from 'clsx'

type UiTextFieldProps = {
  className?: string
  label?: string
  error?: string
  inputProps?: PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>
}
export const UiTextField = ({
  className,
  label,
  error,
  inputProps,
}: UiTextFieldProps) => {
  const id = useId()
  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          'h-10 rounded-md border border-slate-300 px-2 outline-none focus:border-teal-600',
          error && 'border-rose-400 focus:border-rose-600',
        )}
      />
      {error && <div className="text-sm text-rose-400">{error}</div>}
    </div>
  )
}
