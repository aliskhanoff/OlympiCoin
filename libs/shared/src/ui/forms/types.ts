import type { GenericPropType, SizeVariants } from '@olympicoin/types'

export type InputProps = {
    placeholder?: string
    value?: string
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}   & React.DOMAttributes<HTMLElement> 
    & GenericPropType 
    & SizeVariants 
