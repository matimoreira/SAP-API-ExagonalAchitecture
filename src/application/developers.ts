import { IDeveloperRepository } from '../ports/repositories/IDeveloperRepository'
import { IDeveloper } from './entities/IDeveloper' 

export class Developers {
  constructor (
    private _developerRepository: IDeveloperRepository
  ) { }

  async getAll(): Promise<Array<IDeveloper>> {
    return await this._developerRepository.getAll()
  }
}
