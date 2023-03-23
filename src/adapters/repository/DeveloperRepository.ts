import { IDeveloper } from '../../ports/repositories/models/IDeveloper'
import { IDeveloperRepository } from '../../ports/repositories/IDeveloperRepository'

export class DeveloperRepository implements IDeveloperRepository {
    getAll(): Promise<IDeveloper[]> {
        const result = new Array<IDeveloper>
        const dev: IDeveloper = {
            _id: "1",
            name: "Matias Moreira",
            skills: ['1'],
            seniority: 'Senior',
            presentation: 'Un craaa',
            picture: 'nopicture',
            email: 'matiasm@shifta.la',
            isActive: true
        }
        result.push(dev)
        return Promise.resolve(result) 
    }

}