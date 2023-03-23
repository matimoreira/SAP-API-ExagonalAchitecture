export interface ISkill {
    _id : string,
    name: string,
    tag: "error" | "default" | "primary" | "secondary" | "success" | "warning" | "gradient" | undefined,
    isActive: boolean
}