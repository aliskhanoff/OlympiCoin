
export type GenericPropType = IGenericProp & SizeVariants & StyleVariants;

export type StyleVariants = {
    styleVariants?: "primary" | "success" | "info" | "danger" | "warning" | "dark"
}

export type SizeVariants = {
    sizeVariant?: "sm" | "md" | "lg" | "xl"
}

export interface IGenericProp {
    className?: string
    disabled?: boolean
    outlined?: boolean
    rounded?: boolean,
    fullWidth?: boolean
}

export default GenericPropType;