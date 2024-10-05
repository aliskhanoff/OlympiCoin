import { Button} from './button'
import type { IconButtonProps } from './types'

export const IconButton = ({ icon, children, ...rest}: IconButtonProps) => {
  return (
    <Button {...rest} className='flex flex-row gap-1 items-center justify-center px-3'>
      <i>{icon}</i>
      <span className='ml-2 text-sm'>{children}</span>
    </Button>
  )
}