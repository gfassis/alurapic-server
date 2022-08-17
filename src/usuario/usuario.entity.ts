import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-usuario-unico.validator.js";

export class Usuario {
    id: number;

    @Expose({
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({
        message: 'nomeDeUsuário já existe na base!'
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório.'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser uma string.'
    })
    nomeDeUsuario: string;
    
    
    @Expose({
        name: 'email'
    })
    @IsEmail({},{
        message: "email inválido"
    })
    email: string;

    
    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true  //toPlainOnly equivale a desserialização, que é quando
                          // pegamos o objeto JS para enviar pelo http
    })
    @IsNotEmpty({
        message: 'senha é obrigatório.'
    })
    senha: string;
   
    
    @Expose({
        name:'fullName'
    })
    @IsNotEmpty({
        message: 'nome completo é obrigatório'
    })
    nomeCompleto: string;

    @Expose({
        name:'joinDate'
    })
    dataDeEntrada: Date;

}