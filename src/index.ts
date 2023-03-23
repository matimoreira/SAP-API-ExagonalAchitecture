import { DeveloperRepository } from './adapters/repository/DeveloperRepository'
import { SkillRepository } from './adapters/repository/SkillRepository'
import { SAP_API } from './adapters/api/api'
import { Developers } from './application/developers'
import { Skills } from './application/skills'
import { SAP_APP } from './application/sap_app'

const app = new SAP_APP (
  new SAP_API(), 
  new Skills(
    new SkillRepository()
  ),
  new Developers(
    new DeveloperRepository()
  )
)

app.init()
