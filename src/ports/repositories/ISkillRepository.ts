import { ISkill } from "./models/ISkill"

export interface ISkillRepository {
  getAll(): Promise<Array<ISkill>>
}