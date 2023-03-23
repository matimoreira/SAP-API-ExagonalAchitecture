import { Developers } from '../application/developers' 
import { Skills } from '../application/skills' 
import { IUserInterface } from '../ports/IUserInterface'

export class SAP_APP {
  constructor (
    private _userInteface: IUserInterface,
    private _skills: Skills,
    private _developers: Developers
  ) { }

  init() {
    this._userInteface.installGetAllSkills(
      () => this._skills.getAll()
    )
    this._userInteface.installGetAllDevelopers(
      () => this._developers.getAll()
    )
  }
}
