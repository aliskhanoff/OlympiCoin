import type { InputProps } from "./types"
import './styles/input.scss'
import { getDefaultGenericSize } from "@olympicoin/types"

const getInputStyleVariant = (styleVariant: "primary" | "success" | "info" | "danger" | "warning" | "dark") => {
    return {
        primary: "primary", 
        success: "success", 
        info:    "info",
        danger:  "danger", 
        warning: "warning" ,
        dark:    "dark"
    }[styleVariant || "primary"]
}

export const TInput = (props: InputProps) => {
    return (
        <div className={`input-container flex flex-row ${ getInputStyleVariant(props.styleVariant || "primary")} ${props.className}`}>
            {props.iconLeft && <div className="icon-left">{props.iconLeft}</div>}
            <input {...props} />
            {props.iconRight && <div className="icon-right">{props.iconRight}</div>}
        </div>
    )
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
    if(props.iconLeft || props.iconRight) return <IconicInput {...props} />
    return (<input className={`input ${ props.fullWidth && "w-full" } ${ getInputStyleVariant(props.styleVariant || "primary")} ${getDefaultGenericSize(props.sizeVariant || "md")} ${ props.rounded ? "rounded-full": "rounded-sm" }`} {...props} />)
}

export const IconicInput: React.FC<InputProps> = ({ iconLeft, iconRight, fullWidth, styleVariant, rounded, sizeVariant = "md",  ...rest }: InputProps) => {

    /**
     * rounded input padding should be a bit deeper
     */
    const mappedRoundedPadding = {
        sm: rounded ? "rounded-full px-[0.5rem]": "px-[0.3rem]",
        md: rounded ? "rounded-full px-[0.8rem]": "px-[0.4rem]",
        lg: rounded ? "rounded-full px-[0.9rem]": "px-[0.4rem]",
        xl: rounded ? "rounded-full px-[0.8rem]": "px-[0.4rem]",
    }[sizeVariant || "md"]

    const mappedIconsSize = {
        sm: "text-[1.3rem]",
        md: "text-[1.5rem]",
        lg: "text-[1.9rem]",
        xl: "text-[2rem]",
    }[sizeVariant || "md"]

    return (
        <div className={`input-container ${ getInputStyleVariant(styleVariant || "primary")} ${ fullWidth ? "w-full": "" } ${getDefaultGenericSize(sizeVariant || "md")} ${mappedRoundedPadding}`}>
            { iconLeft && <i className={ mappedIconsSize }>{ iconLeft }</i> }
            <input { ...rest } className="input" />
            { iconRight && <i className={ mappedIconsSize }>{ iconRight }</i> } 
        </div>
    )

}