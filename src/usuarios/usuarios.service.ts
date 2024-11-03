import { Injectable } from '@nestjs/common';
import { usuariosmodel } from './usuarios.model';

@Injectable()
export class UsuariosService {
    usuarios=[new usuariosmodel(1,'mati','dicosimo'),new usuariosmodel(2,'fede', 'rivero'),new usuariosmodel(3,'juan','rodriguez')]
    obtenerusuarios(){
        return this.usuarios;
    }
    obtenerusuariosporid(id){
        let filter=this.usuarios.find(usuario=>{return usuario.id==id })
        return filter
    }
    eliminarusuarios(){
        return this.usuarios;
    }
    eliminarusuariosporid(id){
       
        this.usuarios=this.usuarios.filter(usuario=>{return usuario.id!=id })
        
        return this.usuarios
    }
    eliminarusuariospornombre(){
        return this.usuarios;
    }
    crearusuarios(newuser:usuariosmodel){
        newuser.id=this.usuarios.length
        this.usuarios.push(newuser)
        return newuser
    } 
    modificarusuarios(id,newuser:usuariosmodel){
        let usuario=this.obtenerusuariosporid(id)

        if(usuario && newuser.name && newuser.surname){
        usuario.name=newuser.name;
        usuario.surname=newuser.surname
        return usuario;
        }
        else return 'faltan datos'
    }
}
