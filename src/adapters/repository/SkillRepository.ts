import { ISkill } from '../../ports/repositories/models/ISkill'
import { ISkillRepository } from '../../ports/repositories/ISkillRepository'

export class SkillRepository implements ISkillRepository {
    getAll(): Promise<ISkill[]> {
        const result = new Array<ISkill>
        const skill: ISkill = {
            _id: "1",
            name: "Aquitectura Exagonal",
            tag: "primary",
            isActive: true
        }
        result.push(skill)
        return Promise.resolve(result) 
    }

}