import express from 'express'
import { Skills } from '../../application/skills'
import { Developers } from '../../application/developers'
import { IUserInterface } from '../../ports/IUserInterface'
import { IDeveloper } from '../../ports/repositories/models/IDeveloper'
import { ISkill } from '../../ports/repositories/models/ISkill'
import { Console } from 'console'

export class SAP_API implements IUserInterface {

    static PORT = 3000

    constructor ( private api = express() ) {
        api.listen( SAP_API.PORT, () => {
            console.log(`Server Local running in http://localhost:${SAP_API.PORT}/doc`)
        })
    }


    installGetAllSkills(getAllSkills: () => Promise<ISkill[]>): void {
        this.api.get('/api/skills', async (req: any, res: any) => {
            const allSkills = await getAllSkills()
            res.json(allSkills)
        })
    }
    installGetAllDevelopers(getAllDevelopers: () => Promise<IDeveloper[]>): void {
        this.api.get('/api/developers', async (req: any, res: any) => {
            const allSkills = await getAllDevelopers()
            res.json(allSkills)
        })
    }
    
}

