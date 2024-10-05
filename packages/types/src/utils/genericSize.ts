
const defaultPaddingSizes = {
    sm: "py-1 px-3 text-[1rem]",
    md: "py-2 px-4 text-[1.1rem]",
    lg: "py-2 px-4 text-[1.15rem]",
    xl: "py-3 px-5 text-[1.25rem]",
}

export const getDefaultGenericSize = (sizeVariant: "sm" | "md" | "lg" | "xl") => defaultPaddingSizes[sizeVariant]
export default getDefaultGenericSize