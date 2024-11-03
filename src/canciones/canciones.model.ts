export class cancionesmodel{
    id:number
    name:string
    album:string
    artist:string

    constructor (id, name, album, artist){
        this.id=id
        this.name=name
        this.album=album
        this.artist=artist
    }
}