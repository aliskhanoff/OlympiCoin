import type { GenericPropType } from '@olympicoin/types'

export type ButtonProps = {
    children?: React.ReactNode
    link?: string
    href?: string
    tagType?: "link" | "button"
} & React.DOMAttributes<HTMLElement> & GenericPropType

export type IconButtonProps = ButtonProps & { icon: React.ReactNode }