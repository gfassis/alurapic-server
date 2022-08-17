import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome-usuario-unico.validator.js";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";

@Module(
    {
        controllers: [UsuarioController],
        providers: [UsuarioService, IsNomeDeUsuarioUnicoConstraint],
    }
)
export class UsuarioModule{}