
export type ButtonProps = {
    children?: React.ReactNode
    className?: string
    link?: string
    href?: string
    disabled?: boolean
    outlined?: boolean
    rounded?: boolean,
    fullWidth?: boolean

    size?: "sm" | "md" | "lg" | "xl"
    variant?: "primary" | "success" | "info" | "danger" | "warning" | "dark"
    tagType?: "link" | "button"
} & React.DOMAttributes<HTMLElement>

export type IconButtonProps = ButtonProps & { icon: React.ReactNode }