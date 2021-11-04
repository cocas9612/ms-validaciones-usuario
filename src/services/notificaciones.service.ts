import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {Configuraciones} from '../config/configuraciones';
import {NotificacionCorreo, NotificacionSms} from '../models';
const fetch = require("node-fetch");

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  EnviarCorreo(notificacion: NotificacionCorreo): Boolean {
    let url = `${Configuraciones.url_notificaciones_email}?${Configuraciones.arg_hash_notificaciones}=${Configuraciones.hash_notificaciones}&${Configuraciones.arg_destino_correo_notificaciones}=${notificacion.destinatario}&${Configuraciones.arg_asunto_correo_notificaciones}=${notificacion.asunto}&${Configuraciones.arg_mensaje_correo_notificaciones}=${notificacion.mensaje}`;
    fetch(url)
      .then((data: any) => {
        return true;
      });
    return true;
  }

  EnviarSms(notificacion: NotificacionSms): Boolean {
    let url = `${Configuraciones.url_notificaciones_sms}?${Configuraciones.arg_hash_notificaciones}=${Configuraciones.hash_notificaciones}&${Configuraciones.arg_destino_sms_notificaciones}=${notificacion.destino}&${Configuraciones.arg_mensaje_sms_notificaciones}=${notificacion.mensaje}`;
    fetch(url)
      .then((data: any) => {
        return true;
      });
    return true;
  }
}
