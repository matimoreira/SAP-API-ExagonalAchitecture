import { IDeveloper } from "./models/IDeveloper"

export interface IDeveloperRepository {
  getAll(): Promise<Array<IDeveloper>>
}