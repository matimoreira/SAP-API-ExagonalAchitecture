import { ISkill } from "./repositories/models/ISkill"
import { IDeveloper } from "./repositories/models/IDeveloper"

export interface IUserInterface {
    installGetAllSkills(callback: () => Promise< ISkill[] >): void
    installGetAllDevelopers(callback: () => Promise< IDeveloper[] >): void
}