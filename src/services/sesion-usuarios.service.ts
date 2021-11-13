import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Configuraciones} from '../config/configuraciones';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const fetch = require('node-fetch');

@injectable({scope: BindingScope.TRANSIENT})
export class UsuariosService {
  constructor(/* Add @inject to inject parameters */) {}
@repository(UsuarioRepository)
private usuarioRepository: UsuarioRepository
  /*
   * Add service methods here
   */

  async validarCredenciales(credenciales: Credenciales){
    let usuario = await this.usuarioRepository.findOne({
      where: {
        correo: credenciales.usuario,
        clave: credenciales.clave
      }
    });
return usuario;
  }
  async CrearToken(usuario: Usuario):Promise< string>{
let url_crear_token=`${Configuraciones.url_crear_token}?${Configuraciones.arg_nombre_token}=${usuario.nombre}&${Configuraciones.arg_id_persona_token}=${usuario._id}&${Configuraciones.arg_id_rol_token}=${usuario.id_rol}`;
let token="";
await   fetch(url_crear_token)
.then((res:any)=>{
  token= res.text();
})
return token;
  }
}
