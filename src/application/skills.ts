import { ISkillRepository } from '../ports/repositories/ISkillRepository'
import { ISkill } from './entities/ISkill' 

export class Skills {
  constructor (
    private _skillRepository: ISkillRepository
  ) { }

  async getAll(): Promise<Array<ISkill>> {
    return await this._skillRepository.getAll()
  }
}
