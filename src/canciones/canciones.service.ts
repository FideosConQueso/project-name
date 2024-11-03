import { Injectable } from '@nestjs/common';
import { cancionesmodel } from './canciones.model';

@Injectable()
export class CancionesService {
    canciones=[new cancionesmodel(1,'Beat It','Thriller','Michael Jackson'),new cancionesmodel(2,'Dont Cry','Use Your Illusion 1','Guns N Roses'),new cancionesmodel(3,'Rag Doll','Permanent Vacation','Aerosmith')]
    obtenercanciones(){
        return this.canciones;
    }
    obtenercancionespornombre(name){
        let filter=this.canciones.find(cancion=>{return cancion.name==name})
        return filter
    }
    obtenercancionesporid(id:number){
        
        let filter=this.canciones.find(cancion=>{
            console.log(cancion)
            return cancion.id==id})
        return filter
    }
    obtenercancionesporartista(artist){
        let filter=this.canciones.find(cancion=>{return cancion.artist==artist})
        return filter
    }
    
    eliminarcanciones(id){
       
        this.canciones=this.canciones.filter(cancion=>{return cancion.id!=id })
        
        return this.canciones
    }
    
    crearcanciones(newsong:cancionesmodel){
        newsong.id=this.canciones.length
        this.canciones.push(newsong)
        return newsong
    } 
    modificarcanciones(id:number,newsong:cancionesmodel){
        let cancion=this.obtenercancionesporid(id)
        console.log(cancion)
        if(cancion && newsong.name && newsong.album && newsong.artist){
        cancion.name=newsong.name;
        cancion.album=newsong.album
        cancion.artist=newsong.artist
        return cancion;
        }
        else return 'faltan datos'
    }
}