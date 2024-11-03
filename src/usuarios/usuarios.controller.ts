import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { usuariosmodel } from './usuarios.model';

@Controller('usuarios')
export class UsuariosController
{
    constructor(private readonly service:UsuariosService){}

    @Get()
    obtenerusuarios(){
        return this.service.obtenerusuarios();
    }
    @Get(':id')
    obtenerusuariospornombre(@Param('id') id:number){
        return this.service.obtenerusuariosporid(id);
    }
    @Delete(':id')
    eliminarusuarios(@Param('id')id:number){
        return this.service.eliminarusuariosporid(id);
    }
    @Post()
    crearusuarios(@Body()newuser:usuariosmodel){
        return this.service.crearusuarios(newuser);
    } 
    @Put(':id')
    modificarusuarios(@Body()newuser:usuariosmodel,@Param('id')id:number){
        return this.service.modificarusuarios(id,newuser);
    }
} 
