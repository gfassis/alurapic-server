import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {

    private usuarios: Usuario[] = [{
        id: 1,
        nomeDeUsuario: 'geyzon',
        email: 'geyzon@bb.com.br',
        senha: '12345',
        nomeCompleto: 'Geyzon Assis',
        dataDeEntrada: new Date()
    }];

    public cria(usuario: Usuario): Usuario {

        this.usuarios.push(usuario);
        return usuario;
     }

    public buscaPorNomeDeUsuario(nomeUsuario: string): Usuario{
       /*  for (var usu in this.usuarios){
            if(usu  == nomeUsuario){
                return nomeUsuario;
            }
        } */
    

        return this.usuarios.find(usu => usu.nomeDeUsuario == nomeUsuario);
    }

    public listaTodosUsuarios(){
        
    }

}