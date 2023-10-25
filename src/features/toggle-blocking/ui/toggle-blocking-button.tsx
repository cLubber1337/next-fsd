import { UiButton } from '@/shared/ui/ui-button'
import { useToggleBlocking } from '../model/use-toggle-blocking'

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } =
    useToggleBlocking()

  if (!isReady) {
    return null
  }

  return (
    <UiButton
      disabled={isLoading}
      variant={!isBlockingEnabled ? 'primary' : 'secondary'}
      onClick={() => toggleBlocking()}
    >
      {isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
    </UiButton>
  )
}
