import * as React from 'react'
import { useId, useState } from 'react'
import clsx from 'clsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { SelectTrigger } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

type UiOptionsSelectType = {
  value: string
  label: string
}
type UiTextFieldProps = {
  className?: string
  label?: string
  options: UiOptionsSelectType[]
}
export const UiSelect = ({ className, label, options }: UiTextFieldProps) => {
  const id = useId()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <Select
        onOpenChange={(open) => {
          setIsOpen(open)
        }}
      >
        <SelectTrigger className="flex h-10 items-center gap-2 rounded-md border border-slate-300 px-2 outline-none focus:border-teal-600">
          <SelectValue placeholder={options[0].label} />
          <ChevronDown
            className={clsx(
              'ml-auto h-6 w-6 opacity-30 transition-transform',
              isOpen && 'rotate-180',
            )}
          />
        </SelectTrigger>
        <SelectContent className="block">
          {options.map(({ value, label }) => {
            return (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
