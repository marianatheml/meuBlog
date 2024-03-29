import { Theme } from "./Theme"
import { User } from "./User"

export class Post {
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public tema: Theme
    public usuario: User
}