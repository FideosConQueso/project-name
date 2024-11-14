import { Controller, Query } from '@nestjs/common';

import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { cancionesmodel } from './canciones.model';

@Controller('canciones')
export class CancionesController
{
    constructor(private readonly service:CancionesService){}

    @Get()
    obtenercanciones(@Query('name')name:string){
        if(name){
            console.log(name)
            return this.service.obtenercancionespornombre(name)
        }
           
        return this.service.obtenercanciones();
    }
    @Get(':id')
    obtenercancionesid(@Param('id')id:number){
        return this.service.obtenercancionesporid(id);
    }
    @Get('artist/:artist')
    obtenercancionesporartista(@Param('artist') artist:string){
        return this.service.obtenercancionesporartista(artist);
    }
    @Delete(':id')
    eliminarcanciones(@Param('id')id:number){
        return this.service.eliminarcanciones(id);
    }
    @Post()
    crearcanciones(@Body()newsong:cancionesmodel){
        return this.service.crearcanciones(newsong);
    } 
    @Put(':id')
    modificarcanciones(@Body()newsong:cancionesmodel,@Param('id')id:number){
        console.log(newsong)
        return this.service.modificarcanciones(id,newsong);
    }
} 
