import { UiButton } from '@/shared/ui/ui-button'

type Props = {
  isBlockingEnable: boolean
}
export const ToggleBlockingButton = ({ isBlockingEnable }: Props) => {
  return (
    <UiButton variant={isBlockingEnable ? 'primary' : 'secondary'}>
      {isBlockingEnable ? 'Disable Blocking' : 'Enable Blocking'}
    </UiButton>
  )
}
