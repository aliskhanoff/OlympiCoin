import type { ButtonProps } from "./types"

export const Button: React.FC<ButtonProps> = ({ children, rounded=false, sizeVariant = "md", styleVariants = "primary", outlined = false, fullWidth = false,  tagType, className = "", link, ...rest }: ButtonProps ) => {
    const fullWidthStyle = fullWidth && "w-full"
    
    const paddingSize = {
        sm: "py-1 px-3 text-[1rem]",
        md: "py-2 px-4 text-[1.1rem]",
        lg: "py-2 px-4 text-[1.15rem]",
        xl: "py-3 px-5 text-[1.25rem]",
    }[sizeVariant]

    /**
     * todo:
     * add more colors to events
     * 1. active
     * 2. focused
     */

    const variantStyle = {
        "primary":  `${outlined ? "border-2 disabled:bg-blue-200/25 disabled:border-blue-300/25 disabled:text-blue-400/60 hover:shadow-md border-blue-500 text-center text-blue-500 hover:bg-blue-500 hover:text-white" : "disabled:bg-blue-300/35 disabled:border-blue-300/35 disabled:text-blue-400/60 disabled:ring-0 disabled:shadow-0 bg-blue-400 px-4 text-center text-white ring-blue-500/60 hover:bg-blue-500 hover:ring-2" }`,
        "info" :    `${outlined ? "border-2 disabled:bg-sky-300/25 disabled:border-sky-300/25 disabled:text-sky-400/60 hover:shadow-md border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-sky-50" : "disabled:bg-sky-300/25 disabled:border-sky-300/25 disabled:text-sky-400/60 disabled:ring-0 disabled:shadow-0 bg-sky-400 text-sky-50 ring-sky-500/60 hover:bg-sky-500 hover:ring-2"}`,
        "success":  `${outlined ? "border-2 disabled:bg-emerald-300/25 disabled:border-emerald-300/25 disabled:text-emerald-400/60  hover:shadow-md border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white" : "disabled:bg-emerald-300/25 disabled:border-emerald-300/25 disabled:text-emerald-400/60 disabled:ring-0 disabled:shadow-0 bg-emerald-400  text-white ring-emerald-500/60  hover:bg-emerald-500 hover:ring-2" }`,
        "danger":   `${outlined ? "border-2 disabled:bg-red-300/25 disabled:border-red-300/25 disabled:text-red-400/60 hover:shadow-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white" : "disabled:bg-red-300/25 disabled:border-red-300/25 disabled:text-red-400/60 disabled:ring-0 disabled:shadow-0 bg-red-400  text-white ring-red-500/60  hover:bg-red-500 hover:ring-2" }`,
        "warning":  `${outlined ? "border-2 disabled:bg-orange-300/25 disabled:border-orange-300/25 disabled:text-orange-400/60 hover:shadow-md border-orange-500 text-orange-400  hover:bg-orange-500 hover:text-white": "disabled:bg-orange-300/25 disabled:border-orange-300/25 disabled:text-orange-400/60 disabled:ring-0 disabled:shadow-0 bg-orange-400 text-white ring-orange-500/60  hover:bg-orange-500 hover:ring-2"}`,
        "dark":     `${outlined ? "border-2 disabled:bg-slate-300/25 disabled:border-slate-300/25 disabled:text-slate-400/60 hover:shadow-md border-slate-700 text-slate-700  hover:bg-slate-800 hover:text-white": "disabled:bg-slate-300/25 disabled:border-slate-300/25 disabled:text-slate-400/60 disabled:ring-0 disabled:shadow-0 bg-slate-700 text-white ring-slate-800/60  hover:bg-slate-800  hover:ring-2"}`,
    }[styleVariants]

    const finalClassName = `${ rounded ? "rounded-full": "rounded-md" } hover:shadow-md disabled:shadow-none transition-all ${variantStyle} ${paddingSize} ${ fullWidth ? fullWidthStyle : ""} ${className}`

    if(link) return (<a href={link} className={ finalClassName } {...rest}>{ children}</a>)
    
    return (<button className={finalClassName}{...rest}>{ children}</button>)
}

export const PrimaryButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="primary" {...rest}>{children}</Button>)
}

export const SuccessButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="success" {...rest}>{children}</Button>)
}
export const InfoButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="info" {...rest}>{children}</Button>)
}

export const DangerButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="danger" {...rest}>{children}</Button>)
}

export const WarningButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="warning" {...rest}>{children}</Button>)
}

export const DarkButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (<Button {...rest} className={`${className}`} variant="dark" {...rest}>{children}</Button>)
}

