import Link from 'next/link'
import clsx from 'clsx'

type UiLinkProps = {
  className?: string
} & Parameters<typeof Link>[0]
export const UiLink = ({ className, ...props }: UiLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'cursor-pointer p-1 text-teal-500 underline transition-colors hover:text-teal-600',
      )}
    />
  )
}
