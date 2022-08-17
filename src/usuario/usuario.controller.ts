import { Body, Controller, Get, HttpStatus, Inject, NotFoundException, Param, Post } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("users")
export class UsuarioController{
    constructor(private usuarioService: UsuarioService){
    }

    @Post()
    public cria(@Body() usuario: Usuario) : NestResponse {

        const usuarioCriado = this.usuarioService.cria(usuario);
       /*  res.status(HttpStatus.CREATED)
            .location(`/users/${usuarioCriado.nomeDeUsuario}`)
            .json(usuarioCriado); */
     //   return usuarioCriado;
        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nomeDeUsuario}`
            })
            .comBody(usuarioCriado)
            .build();
    }

    @Get(":nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeUsuario: string): Usuario{
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeUsuario);
        if(!usuarioEncontrado){
            throw new NotFoundException('Usuário não encontrado');
        }
        return usuarioEncontrado;
    }

}